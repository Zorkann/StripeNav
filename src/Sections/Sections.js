import { useEffect, useRef } from "react";
import styles from "./Sections.module.css";
import clsx from "clsx";

const Sections = ({ selected, sections }) => {
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);
  const dimensions = useRef(sections);

  useEffect(() => {
    const renderedSections = Array.from(contentRef.current.children);
    const sectionsRect = renderedSections.map((ele) =>
      ele.getBoundingClientRect()
    );

    dimensions.current = sections.reduce((acc, curr, i) => {
      acc[curr.name] = {
        width: sectionsRect[i].width,
        height: sectionsRect[i].height,
        x: i * 100
      };
      return acc;
    }, {});
  }, [sections]);

  useEffect(() => {
    if (selected) {
      const selectedDimension = dimensions.current[selected];
      contentRef.current.style.width = selectedDimension.width + "px";
      contentRef.current.style.height = selectedDimension.height + "px";
      contentRef.current.style.transform = `translateX(${selectedDimension.x}px)`;
    }
  }, [selected]);

  useEffect(() => {
    if (selected) {
      const selectedDimension = dimensions.current[selected];
      const productsDimension = dimensions.current["products"];
      backgroundRef.current.style.transform = `translateX(${
        selectedDimension.x
      }px) scaleX(${
        selectedDimension.width / productsDimension.width
      }) scaleY(${selectedDimension.height / productsDimension.height})`;
    }
  }, [selected]);

  return (
    <>
      <div
        ref={contentRef}
        className={clsx(styles.content, {
          [styles.open]: selected
        })}
      >
        {sections.map(({ name, Component }) => {
          return <Component selected={selected} key={name} />;
        })}
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
