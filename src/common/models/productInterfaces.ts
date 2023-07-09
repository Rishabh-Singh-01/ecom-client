export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  images: string;
  previous_price: number;
  price: number;
  fabric: string;
  quantity: number;
  category_name: string;
  size_name: string;
  size_description: string;
}

export interface ProductSmallInterface {
  id: string;
  name: string;
  description: string;
  images: string;
  price: number;
  quantity: number;
  category_name: string;
  size_name: string;
  size_description: string;
}

export interface AllProductsSmallInterface {
  status: String;
  results: number;
  data: {
    data: [ProductSmallInterface];
  };
}

export interface AllProductsInterface {
  status: String;
  results: number;
  data: {
    data: [ProductInterface];
  };
}
