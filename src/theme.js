import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7a1f2b',
      dark: '#4f1119',
      light: '#a3414c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#c9a24b',
      dark: '#a3822f',
      contrastText: '#241417',
    },
    background: {
      default: '#fbf7f2',
      paper: '#ffffff',
    },
    text: {
      primary: '#241417',
      secondary: '#5b4348',
    },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    overline: {
      letterSpacing: '0.18em',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '0.85rem 2rem',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          overflow: 'hidden',
          '&:before': { display: 'none' },
        },
      },
    },
  },
});

export default theme;
