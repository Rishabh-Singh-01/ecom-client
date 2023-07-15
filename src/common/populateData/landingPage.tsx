import { cookies } from 'next/headers';
import { AllProductsSmallInterface } from '../models/productInterfaces';
import { GetAllThemesInterface } from '../models/themeInterfaces';

export async function populateBestDeals() {
  // :TODO(p) -- put the main api call for best deals
  const { data, status }: AllProductsSmallInterface = await fetch(
    `${process.env.SERVER_SIDE_URL}/api/v1/products`,
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

export async function populateAllThemes() {
  const { data, status }: GetAllThemesInterface = await fetch(
    `${process.env.SERVER_SIDE_URL}/api/v1/themes`
  ).then((res) => res.json());
  if (status !== 'success') {
    // TODO(p) : Do error handling on the front end
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return data;
}
