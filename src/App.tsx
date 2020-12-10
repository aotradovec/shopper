import { Box, Divider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';

export function App() {
  return (
    <BrowserRouter>
      <Box
        width="75%"
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
          <Route path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <React.Fragment />
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}
