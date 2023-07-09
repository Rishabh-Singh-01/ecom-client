import { LineSeperator } from '@/components/Utils/lineSeperator/LineSeperator';
import styles from './checkoutSummary.module.css';

export function CheckoutSummary() {
  return (
    <aside className={styles.checkoutSummary}>
      <div className={styles.checkoutSummaryDeliveryAddress}>
        <h3 className={styles.checkoutSummaryHeading}>Delivery Location</h3>
        <div className={styles.checkoutSummaryDeliveryAddressDetails}>
          <span
            className={`material-symbols-outlined ${styles.checkoutSummaryLocationIcon}`}
          >
            location_on
          </span>
          <div className={styles.checkoutSummaryDeliveryAddressTextWrapper}>
            <h6 className={styles.checkoutSummaryDeliveryAddressTextHeading}>
              12 C, Block E4, Udyog Vihar, Sector 82, Noida 12 C, Block E4,
              Udyog Vihar, Sector 82, Noida
            </h6>
            <span className={styles.checkoutSummaryDeliveryAddressLocator}>
              Home
            </span>
          </div>
          <span
            className={`material-symbols-outlined ${styles.checkoutSummaryForwardIcon}`}
          >
            chevron_right
          </span>{' '}
        </div>
      </div>
      <div className={styles.checkoutSummaryOrderInfoWrapper}>
        <h3 className={styles.checkoutSummaryHeading}>Order Info</h3>
        <div className={styles.checkoutSummaryOrderInfo}>
          <div className={styles.checkoutSummaryOrderInfoDetail}>
            <p className={styles.checkoutSummaryOrderInfoDetailLabel}>
              Subtotal Amount
            </p>
            <span className={styles.checkoutSummaryOrderInfoDetailValue}>
              600
            </span>
          </div>
          <div className={styles.checkoutSummaryOrderInfoDetail}>
            <p className={styles.checkoutSummaryOrderInfoDetailLabel}>
              Discount
            </p>
            <span className={styles.checkoutSummaryOrderInfoDetailValue}>
              -100
            </span>
          </div>
          <div className={styles.checkoutSummaryOrderInfoDetail}>
            <p className={styles.checkoutSummaryOrderInfoDetailLabel}>
              Shipping Charge
            </p>
            <span className={styles.checkoutSummaryOrderInfoDetailValue}>
              0
            </span>
          </div>
          <LineSeperator />
          <div className={styles.checkoutSummaryOrderInfoDetail}>
            <p className={styles.checkoutSummaryOrderInfoDetailLabel}>Total</p>
            <span
              className={`${styles.checkoutSummaryOrderInfoDetailValue} ${styles.checkoutSummaryFinalPrice}`}
            >
              500
            </span>
          </div>
        </div>
      </div>
      <div className={styles.checkoutSummaryCTABtn}>Checkout [Rs: 500.00]</div>
    </aside>
  );
}
