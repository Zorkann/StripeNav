import clsx from "clsx";
import styles from "./Developers.module.css";

const Developers = ({ selected }) => (
  <section
    className={clsx(styles.sectionDevelopers, {
      [styles.active]: selected === "developers"
    })}
  >
    <ul className={styles.navList}>
      <li>Documentation</li>
    </ul>
    <p className={styles.subtle}>
      Start integrating Stripe's products and tools.
    </p>
    <div className={styles.twoCol}>
      <div>
        <h4>Get started</h4>
        <ul className={styles.navListSubtle}>
          <li>Elements</li>
          <li>Checkout</li>
          <li>Mobile apps</li>
          <li>Libraries</li>
        </ul>
      </div>
      <div>
        <h4>Popular topics</h4>
        <ul className={styles.navListSubtle}>
          <li>Apple Pay</li>
          <li>Testing</li>
          <li>Launch checklist</li>
          <li>Plug-ins</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Developers;
