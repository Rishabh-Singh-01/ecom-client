// @ts-nocheck -- ts error supression due to server actions
'use client';
import { useTransition } from 'react';
import styles from './removeItemBtn.module.css';
import { updateItemFromCart } from '@/common/actions/cartActions';

export function RemoveItemBtn({
  quantity,
  id,
}: {
  quantity: number;
  id: string;
}) {
  let [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() =>
        startTransition(() => updateItemFromCart(quantity - 1, id))
      }
      className={`material-symbols-outlined ${styles.savedProductCardChangeQuantityIcon}`}
    >
      remove
    </button>
  );
}
