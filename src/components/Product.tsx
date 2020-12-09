import { Button, Typography } from '@material-ui/core';
import { Cart } from 'mdi-material-ui';
import React from 'react';

export function Product(props: {
  name: string;
  imageUrl: string;
  price: number;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        padding: '1rem',
        width: '18rem',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0 12px 1px',
        borderRadius: '12.5px'
      }}
    >
      <img
        src={props.imageUrl}
        alt={props.name}
        style={{
          width: 'auto',
          height: '14rem',
          objectFit: 'contain',
          marginBottom: '0.75rem'
        }}
      />
      <Typography
        variant="h6"
        style={{
          lineHeight: 1.25,
          marginBottom: '1rem'
        }}
      >
        {props.name}
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h5">
          {props.price} $
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Cart />}
        >
          Koupit
        </Button>
      </div>
    </div>
  );
}
