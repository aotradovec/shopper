import { Box, Typography } from '@material-ui/core';
import { CartVariant } from 'mdi-material-ui';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductsQuantityCountBadge } from './ProductsQuantityCountBadge';

export function Header() {
  const history = useHistory();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0 1rem"
    >
      <Typography
        variant="h4"
        onClick={() => history.push('/')}
        style={{ cursor: 'pointer' }}
      >
        Shopper
      </Typography>
      <ProductsQuantityCountBadge>
        <CartVariant />
      </ProductsQuantityCountBadge>
    </Box>
  );
}
