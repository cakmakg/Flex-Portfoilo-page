import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32', // Soft Green/Teal (Nature/Calm) or maybe Blue? Let's stick to a clean blue for professional look or the user's preferred style.
      // User asked for "ferah, acik renkler". A soft blue/teal is good.
      // Existing site had red. Let's try a professional blue.
      main: '#0288d1', 
      light: '#5eb8ff',
      dark: '#005b9f',
    },
    secondary: {
      main: '#f50057', // Accent
    },
    background: {
      default: '#f8f9fa', // Very light grey, easier on eyes than pure white
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a',
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
      textTransform: 'none', // Modern look
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
          borderRadius: '50px', // Rounded buttons
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                }
            }
        }
    }
  },
});

export default theme;
