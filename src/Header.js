import { forwardRef } from "react";
import styles from "./Header.module.css";

const sections = ["products", "developers", "company"];

const Header = forwardRef(
  ({ onMouseEnter, onMouseLeave, children }, firstButtonRef) => {
    return (
      <header className="header">
        <section>
          <nav className={styles.nav}>
            {sections.map((ele, i) => {
              return (
                <button
                  ref={(ref) =>
                    i === 0 ? (firstButtonRef.current = ref) : null
                  }
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={styles.navLink}
                  data-nav={ele}
                  key={i}
                >
                  {ele}
                </button>
              );
            })}
          </nav>
        </section>
        {children}
      </header>
    );
  }
);

export default Header;
