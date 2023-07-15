import { AllProductsSmallInterface } from '@/common/models/productInterfaces';
import styles from './page.module.css';
import { cookies } from 'next/headers';
import { ProductInfoCart } from '@/components/productInfoCart';
import { PaddingBottomRoutePages } from '@/components/Utils/paddingBottom';

async function getProducts(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  // making param url
  let searchParamsUrl = '?';
  for (const key in searchParams) {
    console.log(key);

    if (typeof searchParams[key] === 'string') {
      searchParamsUrl += `${key}=${searchParams[key]}&`;
    }

    if (Array.isArray(searchParams[key])) {
      (searchParams[key] as string[])!.forEach((el) => {
        searchParamsUrl += `${key}=${el}&`;
      });
    }
  }
  const extraCharRemovedSearchParamUrl = searchParamsUrl.slice(0, -1); // removing extra & at the end of the string

  // fetching data
  const { data, status }: AllProductsSmallInterface = await fetch(
    `${process.env.SERVER_SIDE_URL}/api/v1/products${extraCharRemovedSearchParamUrl}`,
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

export default async function Products({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await getProducts(searchParams);
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
