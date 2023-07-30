import { cookies } from 'next/headers';
import { AllProductsFromCartInterface } from '../models/cartIntefaces';

export async function populateCartItemsData() {
  const res = await fetch(`${process.env.SERVER_SIDE_URL}/api/v1/cart`, {
    // TODO(l) :  Change the caching and make sure the cookies arenot send due to cache even after they disappear and page should be rendered when clicked;
    cache: 'no-cache',
    headers: {
      Cookie: cookies().toString(),
    },
  });
  console.log(res);
  if (res.status === 200) {
    const { data }: AllProductsFromCartInterface = await res.json();
    return data;
  }
  if (res.status === 401)
    return {
      status: 'unauthorized',
      message: 'Please login first!',
    };
  throw new Error('Something went wrong' + res.statusText);
}
