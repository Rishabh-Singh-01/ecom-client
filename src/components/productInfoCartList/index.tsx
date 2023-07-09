import { ProductSmallInterface } from '@/common/models/productInterfaces';
import DraggableCarousel from '../draggableCarousel';
import { ProductInfoCart } from '../productInfoCart';

const getProductListFakeAPI = [
  {
    img: '',
    productName: 'Tshirt 1',
    price: '300',
  },
  {
    img: '',
    productName: 'Tshirt 2',
    price: '400',
  },
  {
    img: '',
    productName: 'Tshirt 3',
    price: '500',
  },
  {
    img: '',
    productName: 'Tshirt 4',
    price: '600',
  },
  {
    img: '',
    productName: 'Tshirt 1',
    price: '300',
  },
  {
    img: '',
    productName: 'Tshirt 2',
    price: '400',
  },
  {
    img: '',
    productName: 'Tshirt 3',
    price: '500',
  },
  {
    img: '',
    productName: 'Tshirt 4',
    price: '600',
  },
];

export function ProductInfoCartList({
  data,
}: {
  data: [ProductSmallInterface];
}) {
  console.log(data.at(0));
  return (
    <DraggableCarousel slidesToShow={2}>
      {data.map((product) => (
        <ProductInfoCart
          title={product.name}
          desc={product.description}
          price={product.price}
          images={product.images}
          id={product.id}
          key={`Product-${product.id}`}
        />
      ))}
    </DraggableCarousel>
  );
}
