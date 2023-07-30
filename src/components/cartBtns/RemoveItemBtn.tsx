// @ts-nocheck -- ts error supression due to server actions
'use client';
import { useTransition } from 'react';
import styles from './removeItemBtn.module.css';
import {
  updateItemFromCart,
  deleteItemFromCart,
} from '@/common/actions/cartActions';

export function RemoveItemBtn({
  quantity,
  id,
  size,
}: {
  quantity: number;
  id: string;
  size: string;
}) {
  let [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => {
        if (quantity === 1)
          return startTransition(() => deleteItemFromCart(id, size));
        else
          return startTransition(() =>
            updateItemFromCart(quantity - 1, id, size)
          );
      }}
      className={`material-symbols-outlined ${styles.savedProductCardChangeQuantityIcon}`}
    >
      remove
    </button>
  );
}
