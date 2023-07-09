import { LineSeperator } from '@/components/Utils/lineSeperator/LineSeperator';
import styles from './cartSummary.module.css';

function getCartGrandTotal(
  productPrice: number,
  discount: number,
  shippingCharges: number
) {
  return productPrice + shippingCharges - discount;
}

export function CartSummary({ productPrice }: { productPrice: number }) {
  const discount = 150;
  const shippingCharges = 100;
  const grandTotal = getCartGrandTotal(productPrice, discount, shippingCharges);
  return (
    <aside className={styles.cartSummary}>
      <div className={styles.cartSummaryOrderInfoWrapper}>
        <h3 className={styles.cartSummaryHeading}>Price Details</h3>
        <div className={styles.cartSummaryOrderInfo}>
          <div className={styles.cartSummaryOrderInfoDetail}>
            <p className={styles.cartSummaryOrderInfoDetailLabel}>
              Subtotal Amount
            </p>
            <span className={styles.cartSummaryOrderInfoDetailValue}>
              {productPrice.toFixed(2)}
            </span>
          </div>
          <div className={styles.cartSummaryOrderInfoDetail}>
            <p className={styles.cartSummaryOrderInfoDetailLabel}>Discount</p>
            <span className={styles.cartSummaryOrderInfoDetailValue}>
              -{discount.toFixed(2)}
            </span>
          </div>
          <div className={styles.cartSummaryOrderInfoDetail}>
            <p className={styles.cartSummaryOrderInfoDetailLabel}>
              Shipping Charge
            </p>
            <span className={styles.cartSummaryOrderInfoDetailValue}>
              {shippingCharges.toFixed(2)}
            </span>
          </div>
          <LineSeperator />
          <div className={styles.cartSummaryOrderInfoDetail}>
            <p className={styles.cartSummaryOrderInfoDetailLabel}>
              Grand Total
            </p>
            <span
              className={`${styles.cartSummaryOrderInfoDetailValue} ${styles.cartSummaryFinalPrice}`}
            >
              {grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.cartSummaryCTABtn}>Place Order </div>
    </aside>
  );
}
