import { cookies } from 'next/headers';
import { AllProductsSmallInterface } from '../models/productInterfaces';

export async function populateBestDeals() {
  // :TODO(p) -- put the main api call for best deals
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
