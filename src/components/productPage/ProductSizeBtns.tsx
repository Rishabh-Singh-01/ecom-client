'use client';
import styles from './productSizeBtns.module.css';
import { useRouter } from 'next/navigation';
import {
  getProductSizeSelectedLocalStore,
  setProductSizeSelectedLocalStore,
} from '@/common/context/localStore';

// :TODO(l) -- Everytime we click the size btns it refresh the next router thus making the whole page gets rerender again under the hood, tho its not desirable its just a workaround for nouw and needed to be changed in the future not to mention whenever the page gets refreshed and called the addToCart btn component initalizes its stuff again to make the workaround complete and make size and addtocart btn for properly.
export function ProductSizeBtns({
  size,
  productId,
}: {
  size: string;
  productId: string;
}) {
  const router = useRouter();
  const currentProductSizeSelected =
    getProductSizeSelectedLocalStore(productId);

  // handler to update product size buttons
  const updateProductSizeClickHandler = () => {
    const newSelectedSize = setProductSizeSelectedLocalStore(productId, size);
    if (newSelectedSize === undefined) return;
    router.refresh();
  };
  return (
    <span
      className={`${styles.productSizeName} ${
        currentProductSizeSelected === size ? styles.selectedSizeName : ''
      }`}
      onClick={updateProductSizeClickHandler}
    >
      {size}
    </span>
  );
}
