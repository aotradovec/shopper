import { Grid } from '@material-ui/core';
import React from 'react';
import { Product } from '../components/product/Product';

export function Products() {
  const data = [
    {
      'id': 1,
      'title': 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      'price': 109.95,
      'description': 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      'category': 'men clothing',
      'image': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    }
  ];

  return (
    <Grid container>
      {data.map((product) => (
        <Grid
          key={product.id}
          item
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <Product
            product={{
              id: product.id,
              name: product.title,
              imageUrl: product.image,
              price: product.price
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
