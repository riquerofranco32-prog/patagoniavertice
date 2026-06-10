/**
 * QA script â€” ALTUM SDI rebranding
 * Toma capturas en mobile (375px) y desktop (1440px) de:
 *   / â†’ Hero, navbar
 *   /servicios â†’ Cards stagger
 *   /contacto â†’ Formulario, WhatsApp
 * Luego envÃ­a un lead de prueba y verifica el toast.
 */

import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const BASE = "http://localhost:3099";
const OUT  = "./qa-screenshots";

const VIEWPORTS = [
  { name: "mobile",   width: 375,  height: 812 },
  { name: "desktop",  width: 1440, height: 900 },
];

const PAGES = [
  { path: "/",          slug: "home",      scrollTo: 400 },
  { path: "/servicios", slug: "servicios", scrollTo: 600 },
  { path: "/contacto",  slug: "contacto",  scrollTo: 0   },
];

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function screenshot(page, vp, label) {
  const dir = `${OUT}/${vp.name}`;
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  const file = `${dir}/${label}.png`;
  await page.screenshot({ path: file, fullPage: false });
  console.log(`  ðŸ“¸  ${file}`);
  return file;
}

async function runQA() {
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results  = [];

  for (const vp of VIEWPORTS) {
    console.log(`\nâ”€â”€ ${vp.name.toUpperCase()} (${vp.width}Ã—${vp.height}) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€`);
    const ctx  = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();

    // â”€â”€ Per-page screenshots â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    for (const pg of PAGES) {
      console.log(`\n  â†’ ${pg.path}`);
      await page.goto(`${BASE}${pg.path}`, { waitUntil: "networkidle", timeout: 30000 });
      await wait(1200); // let Framer Motion settle

      // Top-of-page
      await page.evaluate(() => window.scrollTo(0, 0));
      const topFile = await screenshot(page, vp, `${pg.slug}-top`);
      results.push({ path: topFile, ok: true });

      // Scrolled state (triggers navbar solid, stagger animations)
      if (pg.scrollTo > 0) {
        await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), pg.scrollTo);
        await wait(600);
        const scrollFile = await screenshot(page, vp, `${pg.slug}-scrolled`);
        results.push({ path: scrollFile, ok: true });
      }
    }

    // â”€â”€ WhatsApp link check â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    console.log("\n  â†’ Checking WhatsApp links");
    await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 30000 });
    const waLinks = await page.$$eval(
      'a[href*="wa.me"]',
      links => links.map(a => a.href)
    );
    const waOk = waLinks.every(h => h.includes("5492996095742"));
    console.log(`  WhatsApp links found: ${waLinks.length}, all correct number: ${waOk}`);
    results.push({ label: "WhatsApp links", ok: waOk, detail: waLinks });

    // â”€â”€ Navbar scroll behavior â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    console.log("\n  â†’ Navbar scroll test");
    await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 30000 });
    await wait(800);
    const navBefore = await page.$eval("header", el => el.style.background || getComputedStyle(el).background);
    await page.evaluate(() => window.scrollTo(0, 200));
    await wait(700);
    const navAfter  = await page.$eval("header", el => el.style.background || getComputedStyle(el).background);
    const navChanged = navBefore !== navAfter;
    console.log(`  Navbar bg changed on scroll: ${navChanged}`);
    console.log(`    Before: ${navBefore.substring(0, 60)}`);
    console.log(`    After:  ${navAfter.substring(0, 60)}`);
    results.push({ label: "Navbar scroll", ok: navChanged });

    // â”€â”€ Form submission test (desktop only â€” avoid duplicate) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    if (vp.name === "desktop") {
      console.log("\n  â†’ Form submission test");
      await page.goto(`${BASE}/contacto`, { waitUntil: "networkidle", timeout: 30000 });
      await wait(1000);

      // Fill form
      await page.fill('input[name="nombre"]',   "QA Test ALTUM");
      await page.fill('input[name="email"]',    "qa-test@altumsdi.com");
      await page.fill('input[name="telefono"]', "2994001234");
      // Select tipo_consulta pill
      await page.click('button[type="button"]:has-text("ConsultorÃ­a")');
      await wait(300);
      await page.fill('textarea[name="mensaje"]', "Mensaje de prueba automÃ¡tico â€” QA ALTUM SDI verificaciÃ³n de formulario.");

      await screenshot(page, vp, "contacto-form-filled");

      // Submit
      await page.click('button[type="submit"]');
      await wait(2500);

      // Check for toast
      const toastVisible = await page.$('[role="alert"]') !== null;
      const toastText    = toastVisible
        ? await page.$eval('[role="alert"]', el => el.textContent?.trim())
        : null;
      console.log(`  Toast visible: ${toastVisible}`);
      console.log(`  Toast text: ${toastText}`);
      results.push({ label: "Form toast", ok: toastVisible, detail: toastText });

      await screenshot(page, vp, "contacto-form-submitted");
    }

    await ctx.close();
  }

  await browser.close();

  // â”€â”€ Summary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  console.log("\n\nâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
  console.log("  QA SUMMARY");
  console.log("â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
  const checks = results.filter(r => r.label);
  checks.forEach(r => {
    console.log(`  ${r.ok ? "âœ…" : "âŒ"}  ${r.label}${r.detail ? " â€” " + JSON.stringify(r.detail).substring(0, 80) : ""}`);
  });

  const screenshots = results.filter(r => r.path);
  console.log(`\n  ðŸ“¸  ${screenshots.length} screenshots saved to ./${OUT}/`);
  screenshots.forEach(s => console.log(`       ${s.path}`));

  const failed = checks.filter(r => !r.ok);
  console.log(`\n  ${failed.length === 0 ? "âœ…  ALL CHECKS PASSED" : `âŒ  ${failed.length} CHECKS FAILED`}`);
  process.exit(failed.length > 0 ? 1 : 0);
}

runQA().catch(err => {
  console.error("QA script failed:", err);
  process.exit(1);
});
