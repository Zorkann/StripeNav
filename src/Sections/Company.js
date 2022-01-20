import clsx from "clsx";
import styles from "./Company.module.css";

const Company = ({ selected }) => (
  <section
    className={clsx(styles.sectionCompany, {
      [styles.active]: selected === "company"
    })}
  >
    <ul className={styles.navList}>
      <li>About Stripe</li>
      <li>Customers</li>
      <li>Partner program</li>
      <li>Jobs</li>
      <li>Environment</li>
      <li>Newsroom</li>
    </ul>
  </section>
);

export default Company;
