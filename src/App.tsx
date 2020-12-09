import { Box, Divider } from '@material-ui/core';
import React from 'react';
import { Header } from './components/Header';
import { Products } from './components/Products';

export function App() {
  return (
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
      <Products />
    </Box>
  );
}
