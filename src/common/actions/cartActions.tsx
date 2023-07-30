'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function updateItemFromCart(
  quantity: number,
  productId: string,
  size: string
) {
  await axios.put(
    `${process.env.SERVER_SIDE_URL}/api/v1/cart`,
    {
      productId,
      quantity,
      size,
    },
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );
  // Marks all product pages for revalidating
  revalidatePath('/cart');
}

export async function deleteItemFromCart(productId: string, size: string) {
  // :TODO(l) -- Think to whether use axios fetch only
  await axios.delete(`${process.env.SERVER_SIDE_URL}/api/v1/cart`, {
    headers: {
      ContentType: 'application/json',
      Cookie: cookies().toString(),
    },
    data: {
      productId,
      size,
    },
  });
  // Marks all product pages for revalidating
  revalidatePath('/cart');
}
