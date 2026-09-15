import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f4d3a',
      dark: '#123227',
      light: '#3d6e58',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d97a53',
      dark: '#b85f3c',
      contrastText: '#fff',
    },
    background: {
      default: '#faf8f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#1b1b18',
      secondary: '#5a5a52',
    },
  },
  typography: {
    fontFamily: '"Sora", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    overline: {
      letterSpacing: '0.14em',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '0.9rem 2rem',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          overflow: 'hidden',
          '&:before': { display: 'none' },
        },
      },
    },
  },
});

export default theme;
