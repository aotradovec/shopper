import { useLocalObservable } from 'mobx-react-lite';
import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Product, ProductInCart } from '../types';

interface ProductStore {
  productsInCart: ProductInCart[];
  productsInCartQuantity: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: ProductInCart['id']) => void;
  changeQuantityInCart: (productId: ProductInCart['id'], quantity: number) => void;
}

const ProductStoreContext = createContext<ProductStore | null>(null);

export const useProductStore = () => useContext(ProductStoreContext) as ProductStore;

export function ProductStoreProvider(props: PropsWithChildren<unknown>) {
  const store = useLocalObservable<ProductStore>(() => ({
    productsInCart: [],
    get productsInCartQuantity() {
      return this.productsInCart.length;
    },
    addToCart(product) {
      const productInCart = this.productsInCart.find(({ id }) => product.id === id);

      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        this.productsInCart.push({
          ...product,
          quantity: 1
        });
      }
    },
    removeFromCart(productId) {
      const productInCartIndex = this.productsInCart.findIndex(({ id }) => productId === id);

      if (productInCartIndex >= 0) {
        this.productsInCart.splice(productInCartIndex, 1);
      }
    },
    changeQuantityInCart(productId, quantity) {
      if (quantity > 0) {
        const productIndex = this.productsInCart.findIndex(({ id }) => productId === id);

        this.productsInCart[productIndex].quantity = quantity;
      } else {
        this.removeFromCart(productId);
      }
    }
  }));

  return (
    <ProductStoreContext.Provider value={store}>
      {props.children}
    </ProductStoreContext.Provider>
  );
}
