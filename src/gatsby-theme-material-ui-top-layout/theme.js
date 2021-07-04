// as illustrated in https://github.com/mui-org/material-ui/tree/master/examples/gatsby-theme
// ...this seems to get picked up automagically from the theme plugin

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Open Sans',
        'Helvetica',
        'Arial',
        'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#b3dff3',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#b3dff3',
    },
  },
});

export default theme;