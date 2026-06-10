const pw   = require('./node_modules/playwright/index.js');
const fs   = require('fs');
const path = require('path');

const BASE = 'https://patagoniavertice.vercel.app';
const OUT  = path.join(__dirname, 'qa-screenshots');

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function mkdirp(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

async function shot(page, vpName, label) {
  const dir = path.join(OUT, vpName);
  mkdirp(dir);
  const file = path.join(dir, label + '.png');
  await page.screenshot({ path: file, fullPage: false });
  console.log('  ðŸ“¸ ' + vpName + '/' + label + '.png');
}

const VPs = [
  { name: 'mobile',  w: 375,  h: 812 },
  { name: 'desktop', w: 1440, h: 900 },
];

(async () => {
  mkdirp(OUT);
  const browser = await pw.chromium.launch({ headless: true });
  const checks  = [];

  for (const vp of VPs) {
    console.log('\nâ”€â”€ ' + vp.name.toUpperCase() + ' ' + vp.w + 'x' + vp.h + ' â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€');
    const ctx  = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await ctx.newPage();

    // â”€â”€ HOME / HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    console.log('  -> / (hero)');
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await wait(2000);
    await shot(page, vp.name, '01-home-hero');

    // Scroll â†’ navbar turns solid navy
    await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' }));
    await wait(700);
    await shot(page, vp.name, '02-home-navbar-scrolled');
    const navBg = await page.evaluate(() => {
      const h = document.querySelector('header');
      return getComputedStyle(h).backgroundColor;
    });
    const navOk = navBg !== 'rgba(0, 0, 0, 0)' && navBg !== 'transparent' && navBg !== '';
    console.log('  Navbar bg: ' + navBg + ' | solid=' + navOk);
    checks.push({ label: 'Navbar solid on scroll', ok: navOk });

    // â”€â”€ SERVICIOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    console.log('  -> /servicios');
    await page.goto(BASE + '/servicios', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await wait(1800);
    await shot(page, vp.name, '03-servicios-hero');
    await page.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }));
    await wait(900);
    await shot(page, vp.name, '04-servicios-cards');

    const h3s = await page.evaluate(() =>
      Array.from(document.querySelectorAll('h3')).map(e => e.textContent.trim())
    );
    const has4 = ['Compra', 'Alquiler', 'Consultor', 'Contratos'].every(
      kw => h3s.some(t => t.includes(kw))
    );
    console.log('  h3 texts: ' + h3s.join(' | '));
    checks.push({ label: '4 service cards rendered', ok: has4 });

    // WA links on servicios page
    const waLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(e => e.href)
    );
    const waOk = waLinks.length > 0 && waLinks.every(h => h.includes('5492996095742'));
    console.log('  WA links (' + waLinks.length + '): ' + (waOk ? 'OK' : 'WRONG NUMBER'));
    checks.push({ label: 'WhatsApp correct number', ok: waOk });

    // â”€â”€ CONTACTO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    console.log('  -> /contacto');
    await page.goto(BASE + '/contacto', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await wait(1500);
    await shot(page, vp.name, '05-contacto-top');

    const bodyTxt = await page.evaluate(() => document.body.innerText);
    const hasCip  = bodyTxt.includes('Cipoletti');
    const hasCat  = bodyTxt.includes('Catriel');
    console.log('  Cipoletti=' + hasCip + ', Catriel=' + hasCat);
    checks.push({ label: 'Cipoletti visible',  ok: hasCip });
    checks.push({ label: 'Catriel visible',    ok: hasCat });

    // WA links on contacto page
    const waContacto = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(e => e.href)
    );
    const waCOk = waContacto.length > 0 && waContacto.every(h => h.includes('5492996095742'));
    console.log('  Contacto WA (' + waContacto.length + '): ' + (waCOk ? 'OK' : 'WRONG'));
    checks.push({ label: 'Contacto WhatsApp links', ok: waCOk });

    // â”€â”€ FORM FILL + SUBMIT (desktop only) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    if (vp.name === 'desktop') {
      console.log('  -> Form fill + submit');

      const nombreInput = await page.$('input[name="nombre"]');
      if (!nombreInput) {
        console.log('  Form not found â€” skipping submit test');
        checks.push({ label: 'Form submit + toast', ok: false });
      } else {
        await page.fill('input[name="nombre"]', 'QA ALTUM Test');
        await page.fill('input[name="email"]',  'qa@altumsdi-test.com');
        await page.fill('input[name="telefono"]', '2994001234');

        // Click ConsultorÃ­a pill button
        const pills = await page.evaluate(() =>
          Array.from(document.querySelectorAll('button[type="button"]'))
            .map(b => b.textContent.trim())
        );
        console.log('  Pills found: ' + pills.join(', '));
        const consultoriaBtn = await page.locator('button[type="button"]', { hasText: 'Consultor' }).first();
        await consultoriaBtn.click();
        await wait(300);

        await page.fill('textarea[name="mensaje"]',
          'Prueba automÃ¡tica QA ALTUM SDI - verificar tabla leads_altum en Supabase dashboard.');

        await shot(page, vp.name, '06-contacto-form-filled');

        // Submit
        const submitBtn = await page.locator('button[type="submit"]').first();
        await submitBtn.click();
        await wait(4000);
        await shot(page, vp.name, '07-contacto-form-submitted');

        // Check toast
        const alertEl  = await page.evaluate(() => document.querySelector('[role="alert"]'));
        const alertTxt = await page.evaluate(() => {
          const el = document.querySelector('[role="alert"]');
          return el ? el.textContent.trim() : null;
        });
        const toastOk = alertTxt !== null;
        console.log('  Toast: ' + (alertTxt || 'NOT FOUND'));
        checks.push({ label: 'Success toast on submit', ok: toastOk });
      }
    }

    await ctx.close();
  }

  await browser.close();

  // â”€â”€ Summary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  console.log('\nâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•');
  console.log('  QA SUMMARY');
  console.log('â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•');
  checks.forEach(c => console.log('  ' + (c.ok ? 'âœ…' : 'âŒ') + '  ' + c.label));
  const fails = checks.filter(c => !c.ok).length;
  console.log('\n  ' + (fails === 0 ? 'âœ… ALL CHECKS PASSED' : 'âŒ ' + fails + ' FAILED'));
  console.log('  Screenshots â†’ qa-screenshots/\n');
  process.exit(fails > 0 ? 1 : 0);
})().catch(e => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
