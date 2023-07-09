import { AllProductsInterface } from '../models/productInterfaces';

export async function populateSingleProduct(id: string) {
  // :TODO(p) -- put the main api call for best deals
  const { data, status }: AllProductsInterface = await fetch(
    `${process.env.SERVER_SIDE_URL}/api/v1/products/${id}`,
    {
      headers: {
        ContentType: 'application/json',
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
