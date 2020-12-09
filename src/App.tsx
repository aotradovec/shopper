import { Box } from '@material-ui/core';
import React from 'react';
import { Header } from './components/Header';

export function App() {
  return (
    <Box
      width="75%"
      margin="auto"
      padding="0.5rem 0"
    >
      <Header />
    </Box>
  );
}
