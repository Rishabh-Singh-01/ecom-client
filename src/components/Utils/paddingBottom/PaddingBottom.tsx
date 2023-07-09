import styles from './paddingBottom.module.css';

export function PaddingBottomRoutePages({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  return (
    <div
      style={{ backgroundColor }}
      className={styles.paddingBottomRoutePages}
    ></div>
  );
}

export function PaddingBottomSmallRoutePages({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  return (
    <div
      style={{ backgroundColor }}
      className={`${styles.paddingBottomRoutePages} ${styles.paddingBottomSmallRoutePages}`}
    ></div>
  );
}
