import { Box, Divider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Cart } from './views/Cart';
import { Products } from './views/Products';

export function App() {
  return (
    <BrowserRouter>
      <Box
        width="95%"
        margin="auto"
        padding="0.5rem 0"
      >
        <Header />
        <Divider
          style={{
            margin: '1rem 0'
          }}
        />
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}
