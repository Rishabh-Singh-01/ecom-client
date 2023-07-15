'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './addToCartBtn.module.css';
import { useProductContext } from '@/common/context/productStore';

export function AddToCartBtn({ productId }: { productId: string }) {
  // @ts-ignore: :TODO(l) -- find the fix for ts error
  const { productSize }: { productSize: string } = useProductContext();
  const router = useRouter();

  const onClickAddProductToCartHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/cart`,
        {
          productId,
          quantity: 1,
          size: productSize,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err: any) {
      // TODO:(p) -- If a person adds to the cart and then login it really makes no sense as the product will not be added to the cart -- could use local storage?
      console.log(err);
      if (err.name === 'AxiosError' && err.response.status === 401) {
        router.replace('/login');
        router.refresh();
      } else throw new Error('Something went wrong!!');
    }
  };

  return (
    <button
      className={styles.ctaBtnAddToCart}
      type='submit'
      onClick={onClickAddProductToCartHandler}
    >
      <span className='material-symbols-outlined'>shopping_bag</span>
      Add to Cart
    </button>
  );
}
