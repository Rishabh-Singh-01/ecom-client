'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './addToCartBtn.module.css';
import { getProductSizeSelectedLocalStore } from '@/common/context/localStore';
import { useDidMountEffect } from '@/common/utils/useDidMountEffect';

function getAddToCartBtnStatus(
  productSize: string,
  sizesAddedInCart: string[]
) {
  for (const size of sizesAddedInCart) {
    if (size === productSize) return 'goToCart';
  }
  return 'addToCart';
}

export function AddToCartBtn({
  productId,
  sizesAddedInCart,
}: {
  productId: string;
  sizesAddedInCart: string[];
}) {
  const router = useRouter();
  const productSize = getProductSizeSelectedLocalStore(productId);

  const btnState = getAddToCartBtnStatus(productSize, sizesAddedInCart);
  const [addToCartBtnState, setAddToCartBtnState] = useState(btnState);

  useDidMountEffect(() => {
    setAddToCartBtnState(btnState);
  }, [btnState]);

  // if add to cart functionality is called
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

      if (res.status === 201) setAddToCartBtnState('goToCart');
      else throw new Error('Something went wrong');
    } catch (err: any) {
      // TODO:(p) -- If a person adds to the cart and then login it really makes no sense as the product will not be added to the cart -- could use local storage?
      console.log(err);
      if (err.name === 'AxiosError' && err.response.status === 401) {
        router.replace('/login');
        router.refresh();
      } else throw new Error('Something went wrong!!');
    }
  };

  // if item already added to the cart
  if (addToCartBtnState === 'goToCart') {
    return (
      <Link href='/cart' className={styles.ctaBtnAddToCart}>
        <span className='material-symbols-outlined'>shopping_bag</span>
        Go to Cart
      </Link>
    );
  }

  // if item is not added to the cart
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
