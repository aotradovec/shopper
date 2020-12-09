import { ThemeProvider } from '@material-ui/core';
import 'fontsource-roboto';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { theme } from './theme';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
