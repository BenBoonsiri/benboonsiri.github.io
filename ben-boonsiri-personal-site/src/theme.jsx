import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#707070',
    },
    secondary: {
      main: '#ff9494',
    },
  },
  typography: {
    h1: {
      color: 'primary',
    },
    h5: {
      color: 'primary',
    },
    p: {
        color: 'primary',
    },
  },
});

export default theme;