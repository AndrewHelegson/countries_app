import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light', // или 'dark'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },
});
