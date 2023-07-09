import mush from '../../../public/mush.png';
import Image from 'next/image';
import styles from './savedProductCard.module.css';
import { ProductFromCartInterface } from '@/common/models/cartIntefaces';
import { AddItemBtn, DeleteItemBtn, RemoveItemBtn } from '../cartBtns';

export function SavedProductCard({
  product,
}: {
  product: ProductFromCartInterface;
}) {
  return (
    <article className={styles.savedProductCard}>
      <div className={styles.savedProductCardImageWrapper}>
        <Image
          src={mush}
          alt='clothes'
          className={styles.savedProductCardImage}
        />
      </div>
      <div className={styles.savedProductCardDetails}>
        <div>
          <h4 className='headingTertiary'>{product.name}</h4>
          <span className={styles.savedProductCardPrice}>
            &#8377; {product.price}
          </span>
        </div>
        <div className={styles.savedProductCardActions}>
          <div className={styles.savedProductCardChangeQuantityWrapper}>
            <RemoveItemBtn
              quantity={product.quantity}
              id={product.product_id}
            />
            <span className={styles.savedProductCardQuantity}>
              {product.quantity}
            </span>
            <AddItemBtn quantity={product.quantity} id={product.product_id} />
          </div>
          <DeleteItemBtn id={product.product_id} />
        </div>
      </div>
    </article>
  );
}
