import { createTheme } from '@mui/material/styles';
import { accents, surfaces, shadows, borders, alpha, easing } from './tokens';

const DISPLAY = '"Orbitron", sans-serif';
const BODY = '"Roboto Flex", "Comfortaa", "Helvetica", "Arial", sans-serif';
const MONO = '"Victor Mono", ui-monospace, monospace';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: accents.cyan, light: '#5ee6ff', dark: '#00a3c4', contrastText: '#05050a' },
    secondary: { main: accents.purple, light: '#c084fc', dark: '#7e22ce' },
    // Bölümlerin/kartların accent seçimi için semantik harita (tokens ile aynı).
    accent: accents,
    background: { default: surfaces.s2, paper: surfaces.s3 },
    text: { primary: '#ffffff', secondary: 'rgba(255,255,255,0.68)' },
    divider: 'rgba(255,255,255,0.08)',
  },

  shape: { borderRadius: 16 },

  typography: {
    fontFamily: BODY,
    // Fluid ölçek: mobilden masaüstüne clamp ile akıcı büyüme.
    h1: { fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.01em' },
    h2: { fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.12 },
    h3: { fontFamily: DISPLAY, fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 },
    h5: { fontFamily: DISPLAY, fontWeight: 700 },
    h6: { fontFamily: DISPLAY, fontWeight: 700 },
    body1: { fontSize: '1.05rem', lineHeight: 1.75 },
    body2: { lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0.5 },
    // sx içinde etiketler için kısayol: fontFamily: 'monospace' yerine theme mono.
    fontFamilyMono: MONO,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: surfaces.base },
        '::selection': { background: alpha(accents.cyan, 0.3), color: '#fff' },
        // Klavye kullanıcıları için net odak halkası (a11y).
        '*:focus-visible': { outline: `2px solid ${accents.cyan}`, outlineOffset: '2px', borderRadius: '4px' },
        '*::-webkit-scrollbar': { width: 10, height: 10 },
        '*::-webkit-scrollbar-track': { background: surfaces.base },
        '*::-webkit-scrollbar-thumb': { background: alpha(accents.purple, 0.4), borderRadius: 10, border: `2px solid ${surfaces.base}` },
        '*::-webkit-scrollbar-thumb:hover': { background: alpha(accents.purple, 0.7) },
        // Hareket hassasiyeti: tüm CSS keyframe/geçişlerini pratikte durdurur
        // (Matrix rAF ve framer-motion ayrıca kod tarafında ele alınır).
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.001ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.001ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 10,
          fontWeight: 700,
          letterSpacing: 0.5,
          transition: `all 0.3s ${easing}`,
        },
      },
      variants: [
        {
          props: { variant: 'neon' },
          style: {
            backgroundColor: accents.cyan,
            color: '#05050a',
            fontWeight: 800,
            boxShadow: `0 0 20px ${alpha(accents.cyan, 0.35)}`,
            '&:hover': { backgroundColor: '#7fe9ff', boxShadow: `0 0 30px ${alpha(accents.cyan, 0.6)}` },
          },
        },
        {
          props: { variant: 'ghost' },
          style: {
            color: '#fff',
            border: borders.base,
            backgroundColor: 'transparent',
            '&:hover': { borderColor: alpha(accents.cyan, 0.6), backgroundColor: alpha(accents.cyan, 0.08) },
          },
        },
      ],
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: surfaces.card,
          backgroundImage: 'none',
          border: borders.subtle,
          backdropFilter: 'blur(12px)',
          boxShadow: shadows.card,
        },
      },
    },

    // Contact formundaki tekrar eden input stili tek yerde.
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: alpha(surfaces.s2, 0.5),
          borderRadius: 12,
          transition: `all 0.3s ${easing}`,
          '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
          '&:hover fieldset': { borderColor: alpha(accents.cyan, 0.5) },
          '&.Mui-focused fieldset': { borderColor: accents.cyan, borderWidth: '2px' },
          '&.Mui-focused': { boxShadow: `0 0 15px ${alpha(accents.cyan, 0.12)}` },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(255,255,255,0.5)',
          '&.Mui-focused': { color: accents.cyan, fontWeight: 600 },
        },
      },
    },
  },
});

export default theme;
