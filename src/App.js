import { useState, useRef, useEffect } from "react";
import "./styles.css";
import styles from "./App.module.css";
import Sections from "./Sections/Sections";
import Header from "./Header";
import clsx from "clsx";
import Company from "./Sections/Company";
import Developers from "./Sections/Developers";
import Products from "./Sections/Products";

const sections = [
  { name: "products", Component: Products },
  { name: "developers", Component: Developers },
  { name: "company", Component: Company }
];

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

  const moveArrow = (buttonRect) => {
    const middleOfTheButton = buttonRect.left + buttonRect.width / 2;
    arrowRef.current.style.transform = `translateX(${middleOfTheButton}px) rotate(45deg)`;
  };

  useEffect(() => {
    if (selected) {
      const buttonRect = selectedButtonRef.current.getBoundingClientRect();
      moveArrow(buttonRect);
    }
  }, [selected]);

  useEffect(() => {
    const buttonRect = firstButtonRef.current.getBoundingClientRect();
    moveArrow(buttonRect);
  }, []);

  return (
    <Header
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sections={sections}
      ref={firstButtonRef}
    >
      <div className={clsx(styles.popover, { [styles.open]: selected })}>
        <Sections selected={selected} sections={sections} />
        <div
          className={clsx(styles.arrow, { [styles.open]: selected })}
          ref={arrowRef}
        />
      </div>
    </Header>
  );
}
