import { IconButton, TextField, Typography } from '@material-ui/core';
import { Close } from 'mdi-material-ui';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { roundTo } from '../../helpers/roundTo';
import { ProductInCart } from '../../types';

export const CartProductRow = observer((props: {
  product: ProductInCart;
  removeFromCart: () => void;
  changeQuantity: (quantity: number) => void;
}) => {
  const { product } = props;

  return (
    <tr
      style={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0 6px 0px',
        borderRadius: '12.5px',
        padding: '0.75rem 1rem',
        margin: '1rem 0'
      }}
    >
      <td>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            height: '4rem',
            width: '4rem',
            objectFit: 'contain'
          }}
        />
      </td>
      <td style={{ width: '100%' }}>
        <Typography variant="subtitle2">
          {product.name}
        </Typography>
      </td>
      <td>
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
            min: 1,
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
      </td>
      <td
        style={{
          padding: '0px 0.5rem',
          textAlign: 'right',
          width: '8rem'
        }}
      >
        <Typography>
          {roundTo(product.price * product.quantity, 2)} $
        </Typography>
      </td>
      <td>
        <IconButton
          size="small"
          onClick={props.removeFromCart}
          style={{ marginLeft: '0.75rem' }}
        >
          <Close />
        </IconButton>
      </td>
    </tr>
  );
});
