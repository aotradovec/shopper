export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}
