import styles from './wishlistBtn.module.css';

export function WishlistBtn() {
  return (
    <button className={styles.ctaBtnWishlist}>
      <span className='material-symbols-outlined'>favorite</span>
      Wishlist
    </button>
  );
}
