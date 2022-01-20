import clsx from "clsx";
import styles from "./Products.module.css";

const Products = ({ selected }) => (
  <section
    className={clsx(styles.sectionProducts, {
      [styles.active]: selected === "products"
    })}
  >
    <ul className={styles.navListPrimary}>
      <li className={styles.navListPrimaryPayments}>
        <div className={styles.circle}></div>
        <div className={styles.navListPrimaryText}>
          <h3>Payments</h3>
          <p>A complete payments platform engineered for growth</p>
        </div>
      </li>
      <li className={styles.navListPrimaryBilling}>
        <div className={styles.circle}></div>
        <div className={styles.navListPrimaryText}>
          <h3>Billing</h3>
          <p>Build and scale your recurring business model.</p>
        </div>
      </li>
      <li className={styles.navListPrimaryConnect}>
        <div className={styles.circle}></div>
        <div className={styles.navListPrimaryText}>
          <h3>Connect</h3>
          <p>Everything platforms need to get sellers paid.</p>
        </div>
      </li>
    </ul>
  </section>
);

export default Products;
