// @ts-nocheck -- ts error supression due to server actions
'use client';
import styles from './sizeBtn.module.css';

export function SizeBtn({ size }: { size: string }) {
  return <span className={styles.cartSizeBtn}>Size: {size}</span>;
}
