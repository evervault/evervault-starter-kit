import { cloneElement } from 'react';
import styles from './Pagination.module.css';

function Pagination({ children, activeIndex }) {
  return children.map((child, index) => {
    if (index === activeIndex) {
      return cloneElement(child, {
        activeIndex,
        totalPages: children.length,
        key: `item-${index}`,
      });
    }
  });
}

function Item({ children, cta, activeIndex, totalPages }) {
  const progressArray = Array.from(Array(totalPages).keys());
  return (
    <>
      {children}
      <nav className={styles.navigation}>
        <div className={styles.progress}>
          {progressArray.map((_, index) => (
            <div
              key={`progress-${index}`}
              className={styles.progressItem}
              data-active={index === activeIndex}
            />
          ))}
        </div>
        {cta}
      </nav>
    </>
  );
}

Pagination.Item = Item;

export default Pagination;
