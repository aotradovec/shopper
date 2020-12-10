import { Box, IconButton, TextField, Typography } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ProductInCart } from '../types';

export const CartProduct = observer((props: {
  product: ProductInCart;
  removeFromCart: () => void;
  changeQuantity: (quantity: number) => void;
}) => {
  const { product } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 0 6px 0px"
      borderRadius="12.5px"
      padding="0.75rem 1rem"
      margin="1rem 0"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          height: '4rem',
          width: '4rem',
          objectFit: 'contain'
        }}
      />
      <Box
        flexGrow="1"
        margin="0 1rem"
        display="flex"
        alignItems="center"
        maxWidth="65%"
      >
        <Typography variant="subtitle2">
          {product.name}
        </Typography>
      </Box>
      <TextField
        type="number"
        variant="outlined"
        size="small"
        value={product.quantity}
        inputProps={{
          onChange: (event) => {
            const value = parseInt(event.currentTarget.value);

            props.changeQuantity(value);
          },
          style: {
            padding: '0.5rem 0.25rem'
          }
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexShrink: 1,
          width: '3rem'
        }}
      />
      <Typography
        style={{
          flexGrow: 1,
          textAlign: 'right'
        }}
      >
        {product.price} $
      </Typography>
      <IconButton
        size="small"
        onClick={props.removeFromCart}
        style={{ marginLeft: '0.75rem' }}
      >
        <Close />
      </IconButton>
    </Box>
  );
});
