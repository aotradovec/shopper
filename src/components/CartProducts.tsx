import { observer } from 'mobx-react-lite';
import React from 'react';
import { useProductStore } from '../store/ProductStore';
import { CartProduct } from './CartProduct';

export const CartProducts = observer(() => {
  const productStore = useProductStore();

  return (
    <React.Fragment>
      {productStore.productsInCart.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          removeFromCart={() => productStore.removeFromCart(product.id)}
          changeQuantity={(quantity) => (
            productStore.changeQuantityInCart(
              product.id,
              quantity
            )
          )}
        />
      ))}
    </React.Fragment>
  );
});
