/**
 * Escala tipográfica Altum (Sprint 1)
 * H1 56px · H2 36px · H3 28px · body 16px · small 14px
 * Headings en Cormorant Garamond (+1% tracking),
 * body en Inter (+0.5% tracking), accent en Sohne (Hanken Grotesk).
 */
export const typo = {
  h1: "text-[56px] font-semibold font-cormorant tracking-[0.01em] leading-[1.1]",
  h2: "text-[36px] font-semibold font-cormorant tracking-[0.01em] leading-[1.15]",
  h3: "text-[28px] font-semibold font-cormorant tracking-[0.01em] leading-[1.2]",
  body: "text-[16px] font-normal font-inter tracking-[0.005em] leading-relaxed",
  small: "text-[14px] font-normal font-inter tracking-[0.005em]",
  accent: "font-sohne font-semibold text-gold-500",
} as const;

export type TypoToken = keyof typeof typo;
