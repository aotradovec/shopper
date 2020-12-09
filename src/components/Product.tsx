import React from 'react';

export function Product(props: {
  name: string;
  imageUrl: string;
  price: number;
}) {
  return (
    <div>
      <img
        src={props.imageUrl}
      />
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>Koupit</div>
    </div>
  );
}
