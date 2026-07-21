import { Box, Container } from '@mui/material';
import { surfaces, accents, alpha } from '../../theme/tokens';

// İnce grid deseni (About/Certificates arka planı) — tek yerde.
const gridBg = (accent) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  opacity: 0.05,
  pointerEvents: 'none',
  backgroundImage: `linear-gradient(${alpha(accent, 0.4)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(accent, 0.4)} 1px, transparent 1px)`,
  backgroundSize: '44px 44px',
  maskImage: 'radial-gradient(ellipse at center, #000 40%, transparent 85%)',
});

// Yumuşak radial parıltılar (Skills arka planı) — tek yerde.
const glowBg = (
  <>
    <Box aria-hidden sx={{ position: 'absolute', top: '6%', left: '-10%', width: '45%', height: '55%', background: `radial-gradient(circle, ${alpha(accents.purple, 0.12)} 0%, transparent 60%)`, filter: 'blur(70px)', zIndex: 0, pointerEvents: 'none' }} />
    <Box aria-hidden sx={{ position: 'absolute', bottom: '-12%', right: '-10%', width: '45%', height: '55%', background: `radial-gradient(circle, ${alpha(accents.cyan, 0.12)} 0%, transparent 60%)`, filter: 'blur(70px)', zIndex: 0, pointerEvents: 'none' }} />
  </>
);

// Tüm bölümlerin ortak dış kabuğu: tutarlı dikey ritim, yüzey rengi,
// opsiyonel arka plan katmanı ve hizalı içerik konteyneri.
export const SectionShell = ({
  id,
  surface = 's2',
  bg = 'none',
  accent = accents.cyan,
  maxWidth = 'lg',
  children,
  sx,
}) => (
  <Box
    id={id}
    component="section"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      py: { xs: 9, md: 14 },
      backgroundColor: surfaces[surface],
      ...sx,
    }}
  >
    {bg === 'grid' && <Box aria-hidden sx={gridBg(accent)} />}
    {bg === 'glow' && glowBg}
    <Container maxWidth={maxWidth} sx={{ position: 'relative', zIndex: 1 }}>
      {children}
    </Container>
  </Box>
);
