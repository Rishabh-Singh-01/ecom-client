// @ts-nocheck -- ts error supression due to server actions
'use client';
import { startTransition } from 'react';
import { updateItemFromCart } from '@/common/actions/cartActions';
import styles from './addItemBtn.module.css';

// :TODO(l) -- Compress addItemBtn and removeItemBtn into one component
// :TODO(p) -- In case server action fails for eg: internal server error get error handling
export function AddItemBtn({
  quantity,
  id,
  size,
}: {
  quantity: number;
  id: string;
  size: string;
}) {
  return (
    <button
      onClick={() =>
        startTransition(() => updateItemFromCart(quantity + 1, id, size))
      }
      className={`material-symbols-outlined ${styles.savedProductCardChangeQuantityIcon}`}
    >
      Add
    </button>
  );
}
