'use client';
import { useProductContext } from '@/common/context/productStore';
import styles from './productSizeBtns.module.css';
import React, { Dispatch, SetStateAction } from 'react';

export function ProductSizeBtns({ size }: { size: string }) {
  // @ts-ignore: :TODO(l) -- find the fix for ts error
  const {
    productSize,
    setProductSize,
  }: { productSize: string; setProductSize: Dispatch<SetStateAction<string>> } =
    useProductContext();
  console.log(productSize);

  const updateProductSizeClickHandler = () => setProductSize(size);
  return (
    <span
      className={`${styles.productSizeName} ${
        productSize === size ? styles.selectedSizeName : ''
      }`}
      onClick={updateProductSizeClickHandler}
    >
      {size}
    </span>
  );
}
