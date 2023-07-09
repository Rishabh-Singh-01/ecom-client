import Image from 'next/image';
import mush from '../../../public/mush.png';
import styles from './style.module.css';
import Link from 'next/link';

export function ProductInfoCart({
  title,
  desc,
  price,
  images,
  id,
}: {
  title: string;
  desc: string;
  price: number;
  images: string;
  id: string;
}) {
  return (
    <Link className={styles.productInfoCart} href={`/product/${id}`}>
      <Image src={mush} alt='clothes' className={styles.productInfoCartImage} />
      <div className={styles.productInfoCartContent}>
        <h4 className={styles.productInfoCartTitle}>{title}</h4>
        <p className={styles.productInfoCartDesc}>{desc}</p>
        <span className={styles.productInfoCartPrice}>
          &#8377; {price?.toFixed(2)}
        </span>
      </div>
      <span
        className={`material-symbols-outlined ${styles.productInfoCartFavoriteIcon}`}
      >
        favorite
      </span>
    </Link>
  );
}
