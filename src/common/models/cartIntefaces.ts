export interface ProductFromCartInterface {
  user_id: string;
  product_id: string;
  quantity: number;
  name: string;
  price: number;
  images: string;
  description: string;
}

export interface AllProductsFromCartInterface {
  status: String;
  results: number;
  data: {
    data: [ProductFromCartInterface];
  };
}
