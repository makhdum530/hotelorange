import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(14, 88%, 55%)', // Orange cola color
      light: 'hsl(14, 88%, 65%)',
      dark: 'hsl(14, 88%, 45%)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'hsl(25, 95%, 53%)', // Sunset orange
      light: 'hsl(25, 95%, 63%)',
      dark: 'hsl(25, 95%, 43%)',
      contrastText: '#ffffff',
    },
    info: {
      main: 'hsl(200, 100%, 50%)', // Bright blue
      light: 'hsl(200, 100%, 60%)',
      dark: 'hsl(200, 100%, 40%)',
    },
    warning: {
      main: 'hsl(45, 100%, 51%)', // Golden yellow
      light: 'hsl(45, 100%, 61%)',
      dark: 'hsl(45, 100%, 41%)',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: 'hsl(220, 13%, 18%)',
      secondary: 'hsl(220, 9%, 46%)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px -5px rgba(255, 107, 53, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%))',
          boxShadow: '0 4px 15px -3px rgba(255, 107, 53, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, hsl(14, 88%, 50%), hsl(25, 95%, 48%))',
            boxShadow: '0 10px 25px -5px rgba(255, 107, 53, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 20,
        },
        colorPrimary: {
          background: 'linear-gradient(135deg, hsl(14, 88%, 55%), hsl(25, 95%, 53%))',
          color: 'white',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'hsl(14, 88%, 55%)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'hsl(14, 88%, 55%)',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
      },
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb923c',
      light: '#fdba74',
      dark: '#ea580c',
    },
    secondary: {
      main: '#fdba74',
      light: '#fed7aa',
      dark: '#fb923c',
    },
  },
  typography: {
    fontFamily: '"Headland One", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(251, 146, 60, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(251, 146, 60, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});
export default theme;
// export default muiTheme;