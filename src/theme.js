import { ThemeProvider, createTheme } from '@mui/material/styles';

import React from 'react';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "red"
        }
      }
    }
  }
});