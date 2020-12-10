import { Box, Button, Typography } from '@material-ui/core';
import { Cart } from 'mdi-material-ui';
import React from 'react';
import { useProductStore } from '../../store/ProductStore';
import type { Product as ProductType } from '../../types';

export function Product(props: {
  product: ProductType
}) {
  const { product } = props;
  const productStore = useProductStore();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0 12px 1px',
        borderRadius: '12.5px'
      }}
    >
      <Box height="15rem">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            marginBottom: '0.75rem'
          }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        style={{
          lineHeight: 1.25,
          marginBottom: '1rem'
        }}
      >
        {product.name}
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6">
          {product.price} $
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Cart />}
          onClick={() => productStore.addToCart(product)}
        >
          Koupit
        </Button>
      </div>
    </div>
  );
}
