import { Box, Typography } from '@material-ui/core';
import { CartVariant } from 'mdi-material-ui';
import React from 'react';
import { ProductsQuantityCountBadge } from './ProductsQuantityCountBadge';

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
      <ProductsQuantityCountBadge>
        <CartVariant />
      </ProductsQuantityCountBadge>
    </Box>
  );
}
