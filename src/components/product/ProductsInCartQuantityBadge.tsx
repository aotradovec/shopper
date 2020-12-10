import { Badge, BadgeProps } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useProductStore } from '../../store/ProductStore';

export const ProductsInCartQuantityBadge = observer((props: BadgeProps) => {
  const productStore = useProductStore();

  return (
    <Badge
      color="secondary"
      badgeContent={productStore.productsInCartQuantity}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'top'
      }}
      {...props}
    />
  );
});
