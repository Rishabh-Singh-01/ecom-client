import Link from 'next/link';
import styles from './header.module.css';

// TODO(p): Still not aligned the link tag completely in mid
export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerEquals} ${styles.headerLeft}`}>
        <span className='material-symbols-outlined'>menu</span>
      </div>
      <div className={`${styles.headerEquals} ${styles.headerMiddle}`}>
        <Link href='/'>
          <span className='material-symbols-outlined'>polymer</span>
        </Link>
      </div>
      <div className={`${styles.headerEquals} ${styles.headerRight}`}>
        <Link href='/search'>
          <span className='material-symbols-outlined'>search</span>
        </Link>
        <Link href='/products'>
          <span className='material-symbols-outlined'>favorite</span>
        </Link>
        <Link href='/cart'>
          <span className='material-symbols-outlined'>shopping_cart</span>
        </Link>
      </div>
    </header>
  );
}
