import { Box, Typography } from '@material-ui/core';
import { CartVariant } from 'mdi-material-ui';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ProductsInCartQuantityBadge } from './product/ProductsInCartQuantityBadge';

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
      <Link
        to="/cart"
        style={{ color: 'black' }}
      >
        <ProductsInCartQuantityBadge>
          <CartVariant />
        </ProductsInCartQuantityBadge>
      </Link>
    </Box>
  );
}
