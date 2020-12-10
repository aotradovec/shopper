import { ThemeProvider } from '@material-ui/core';
import 'fontsource-roboto';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { ProductStoreProvider } from './store/ProductStore';
import { theme } from './theme';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductStoreProvider>
        <App />
      </ProductStoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
