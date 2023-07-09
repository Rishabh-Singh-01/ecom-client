import { AllProductsSmallInterface } from '@/common/models/productInterfaces';
import styles from './page.module.css';
import { cookies } from 'next/headers';
import { ProductInfoCart } from '@/components/productInfoCart';
import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';

async function getProducts() {
  const { data, status }: AllProductsSmallInterface = await fetch(
    'http://localhost:8080/api/v1/products',
    {
      credentials: 'include',
      // TODO(l) :  Change the caching and make sure the cookies arenot send due to cache even after they disappear;
      cache: 'no-cache',
      headers: {
        Cookie: cookies().toString(),
      },
    }
  ).then((res) => res.json());
  if (status !== 'success') {
    // TODO(p) : Do error handling on the front end
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return data;
}

export default async function Products() {
  const { data } = await getProducts();
  return (
    <div>
      <PaddingBottomRoutePages backgroundColor={'inherit'} />
      <div className={`grid grid--2-cols ${styles.productInfoContainer}`}>
        {data.map((product) => (
          <ProductInfoCart
            title={product.name}
            desc={product.description}
            price={product.price}
            images={product.images}
            id={product.id}
            key={`Searched-${product.name}`}
          />
        ))}
      </div>
    </div>
  );
}
