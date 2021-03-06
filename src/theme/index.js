import { createTheme } from '@mui/material/styles';

const agrotis = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00796B',
      dark: '#00A98E',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#D32F2F',
      light: '#D32F2F',
      dark: '#D32F2F',
    },
    success: {
      main: '#43A047',
      light: '#43A047',
      dark: '#43A047',
    },
    background: {
      default: '#E5E5E5',
    },
    text: {
      primary: '#69747B',
      secondary: '#9E9E9E',
    },
    warning: {
      main: '#D32F2F',
      light: '#D32F2F',
      dark: '#D32F2F',
    },
  },
});

export default agrotis;
