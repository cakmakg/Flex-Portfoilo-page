import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0288d1',
      light: '#5eb8ff',
      dark: '#005b9f',
    },
    secondary: {
      main: '#a855f7',
    },
    background: {
      default: '#0f0f1a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
    },
  },
  typography: {
    fontFamily: '"Comfortaa", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '10px 24px',
        },
      },
    },
  },
});

export default theme;
