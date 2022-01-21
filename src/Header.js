import { forwardRef } from "react";
import styles from "./Header.module.css";

const Header = forwardRef(
  ({ onMouseEnter, onMouseLeave, sections, children }, firstButtonRef) => {
    return (
      <header>
        <section>
          <nav className={styles.nav}>
            {sections.map(({ name }, i) => {
              return (
                <button
                  ref={(ref) =>
                    i === 0 ? (firstButtonRef.current = ref) : null
                  }
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={styles.navLink}
                  data-nav={name}
                  key={i}
                >
                  {name}
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
