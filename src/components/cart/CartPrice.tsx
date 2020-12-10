import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { roundTo } from '../../helpers/roundTo';
import { useProductStore } from '../../store/ProductStore';

export const CartPrice = observer(() => {
  const productStore = useProductStore();

  return (
    <Box textAlign="right">
      <Typography variant="h6">
        Celkem k úhradě
      </Typography>
      <Typography variant="h5">
        {roundTo(productStore.productsInCartPrice, 2)} $
      </Typography>
    </Box>
  );
});
