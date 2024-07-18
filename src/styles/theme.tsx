import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#1930a7',
    },
    secondary: {
      main: '#D4E8F7',
    },
    error: {
      main: '#b91414ed',
    },
  },
});

export default theme;
