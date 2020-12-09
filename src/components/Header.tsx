import { Box, Typography } from '@material-ui/core';
import { CartVariant } from 'mdi-material-ui';
import React from 'react';

export function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0 1rem"
    >
      <Typography variant="h4">
        Shopper
      </Typography>
      <CartVariant />
    </Box>
  );
}
