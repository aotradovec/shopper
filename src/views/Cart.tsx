import { Box, IconButton, Typography } from '@material-ui/core';
import { ArrowLeft } from 'mdi-material-ui';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CartProducts } from '../components/CartProducts';

export function Cart() {
  const history = useHistory();

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <IconButton
          onClick={() => history.push('/')}
        >
          <ArrowLeft />
        </IconButton>
        <Typography
          variant="h5"
          style={{ margin: '0 1rem' }}
        >
          Košík
        </Typography>
      </Box>
      <CartProducts />
    </div>
  );
}
