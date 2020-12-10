import { observer } from 'mobx-react-lite';
import React from 'react';
import { useProductStore } from '../../store/ProductStore';
import { CartProductRow } from './CartProductRow';

export const CartProductsTable = observer(() => {
  const productStore = useProductStore();

  return (
    <table
      style={{
        width: '100%'
      }}
    >
      <tbody>
        {productStore.productsInCart.map((product) => (
          <CartProductRow
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
      </tbody>
    </table>
  );
});
