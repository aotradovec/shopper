import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useFetch } from 'use-http/dist/esm';
import { Product } from '../components/product/Product';

type ProductsApiData = Array<{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}>;


export function Products() {
  const { loading, data = [] } = useFetch<ProductsApiData>(
    'https://fakestoreapi.com/products',
    {},
    []
  );

  return (
    <Grid container>
      {loading ? (
        <CircularProgress style={{ margin: 'auto' }} />
      ) : (
        data.map((product) => (
          <Grid
            key={product.id}
            item
            xl={2}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{
              display: 'flex',
              padding: '0.75rem'
            }}
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
        ))
      )}
    </Grid>
  );
}
