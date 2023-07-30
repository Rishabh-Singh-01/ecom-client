// @ts-nocheck -- ts error supression due to server actions
'use client';
import { startTransition } from 'react';
import { deleteItemFromCart } from '@/common/actions/cartActions';
import styles from './deleteItemBtn.module.css';

export function DeleteItemBtn({ id, size }: { id: string; size: string }) {
  return (
    <button
      className={`material-symbols-outlined ${styles.savedProductCardDeleteIcon}`}
      onClick={() => startTransition(() => deleteItemFromCart(id,size))}
    >
      Delete
    </button>
  );
}
