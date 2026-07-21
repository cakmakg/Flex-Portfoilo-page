// Ham tasarım token'ları — sx içinde tekrar eden literal'ler için tek kaynak.
// MUI teması atomları (palette/typography/components) yönetir; burası tema dışında
// kalan gradient/gölge/kenarlık gibi ham değerleri toplar. Renk mantığı tek yerde
// dursun diye accent'ler hem burada hem theme.palette.accent'te aynı tutulur.

export const accents = {
  cyan: '#00d9ff',
  purple: '#a855f7',
  success: '#10b981',
  warn: '#f59e0b',
};

// Koyu yüzey merdiveni (en derinden en açığa).
export const surfaces = {
  base: '#0b0f19',
  s1: '#0f0f1a',
  s2: '#111827',
  s3: '#172033',
  card: 'rgba(31, 41, 55, 0.4)',
  cardHover: 'rgba(31, 41, 55, 0.7)',
};

export const borders = {
  subtle: '1px solid rgba(255,255,255,0.06)',
  base: '1px solid rgba(255,255,255,0.10)',
};

// Premium his için ortak yumuşama eğrisi.
export const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const transition = `all 0.35s ${easing}`;

export const gradients = {
  brand: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 50%, #00d9ff 100%)',
  brandSoft: 'linear-gradient(135deg, #00d9ff, #a855f7)',
};

// Katmanlı gölgeler: ambient derinlik + ince üst highlight.
export const shadows = {
  card: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 30px -12px rgba(0,0,0,0.6)',
  cardHover: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 48px -16px rgba(0,0,0,0.7)',
};

// hex (#rrggbb) + 0..1 alfa → 8 haneli hex. Ör: alpha('#00d9ff', 0.25) => '#00d9ff40'.
export const alpha = (hex, a) =>
  hex + Math.round(Math.min(Math.max(a, 0), 1) * 255).toString(16).padStart(2, '0');

// accent rengine göre dışa vuran neon parıltısı (hover/glow için).
export const glow = (color, a = 0.4) => `0 0 24px ${alpha(color, a)}`;

// Bir accent için kart yüzeyinde kullanılan tutarlı stil paketi.
// GlassCard bunu temel alır; ihtiyaç halinde tek tek de kullanılabilir.
export const accentSurface = (color) => ({
  border: borders.subtle,
  borderTop: `2px solid ${alpha(color, 0.5)}`,
  boxShadow: shadows.card,
});
