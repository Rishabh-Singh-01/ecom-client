import styles from './skeleton.module.css';

export function ProductInfoCartSkeleton() {
  return (
    <div className={styles.cart}>
      <div className={`skeleton ${styles.skeletonImage}`}></div>
      <div className={styles.content}>
        <div className={`skeleton ${styles.skeletonText}`}></div>
        <div className={`skeleton ${styles.skeletonText}`}></div>
        <div className={`skeleton ${styles.skeletonText}`}></div>
        <div className={`skeleton ${styles.skeletonText}`}></div>
        <div
          className={`skeleton ${styles.skeletonText} ${styles.skeletonTextLast}`}
        ></div>
        <div
          className={`skeleton ${styles.skeletonText} ${styles.skeletonTextSmall}`}
        ></div>
      </div>
    </div>
  );
}
