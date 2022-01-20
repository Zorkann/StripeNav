import { useState, useRef, useEffect } from "react";
import "./styles.css";
import styles from "./App.module.css";
import Sections from "./Sections/Sections";
import Header from "./Header";
import clsx from "clsx";

const dimensions = {
  products: { width: 490, height: 280, x: 0 },
  developers: { width: 390, height: 266, x: 100 },
  company: { width: 260, height: 296, x: 200 }
};

export default function App() {
  const [selected, setSelected] = useState(null);
  const firstButtonRef = useRef(null);
  const selectedButtonRef = useRef();
  const arrowRef = useRef(null);

  const onMouseEnter = (event) => {
    const localSelected = event.target.getAttribute("data-nav");
    setSelected(localSelected);
    selectedButtonRef.current = event.target;
  };

  const onMouseLeave = () => {
    setSelected(null);
  };

  const moveArrow = (rect) => {
    const middleOfTheButton = rect.left + rect.width / 2;
    arrowRef.current.style.transform = `translateX(${middleOfTheButton}px) rotate(45deg)`;
  };

  useEffect(() => {
    if (selected) {
      const rect = selectedButtonRef.current.getBoundingClientRect();
      moveArrow(rect);
    }
  }, [selected]);

  useEffect(() => {
    const rect = firstButtonRef.current.getBoundingClientRect();
    moveArrow(rect);
  }, []);

  return (
    <Header
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={firstButtonRef}
    >
      <div className={clsx(styles.popover, { [styles.open]: selected })}>
        <Sections selected={selected} dimensions={dimensions} />
        <div
          className={clsx(styles.arrow, { [styles.open]: selected })}
          ref={arrowRef}
        />
      </div>
    </Header>
  );
}
