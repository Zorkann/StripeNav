import { useEffect, useRef } from "react";
import Company from "./Company";
import Developers from "./Developers";
import Products from "./Products";
import styles from "./Sections.module.css";
import clsx from "clsx";

const Sections = ({ selected, dimensions }) => {
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (selected) {
      contentRef.current.style.width = dimensions[selected].width + "px";
      contentRef.current.style.height = dimensions[selected].height + "px";
      contentRef.current.style.transform = `translateX(${dimensions[selected].x}px)`;
    }
  }, [selected, dimensions]);

  useEffect(() => {
    if (selected) {
      backgroundRef.current.style.transform = `translateX(${
        dimensions[selected].x
      }px) scaleX(${
        dimensions[selected].width / dimensions["products"].width
      }) scaleY(${
        dimensions[selected].height / dimensions["products"].height
      })`;
    }
  }, [selected, dimensions]);

  return (
    <>
      <div
        ref={contentRef}
        className={clsx(styles.content, {
          [styles.open]: selected
        })}
      >
        <Company selected={selected} />
        <Developers selected={selected} />
        <Products selected={selected} />
      </div>
      <div
        ref={backgroundRef}
        className={clsx(styles.background, {
          [styles.open]: selected
        })}
      />
    </>
  );
};

export default Sections;
