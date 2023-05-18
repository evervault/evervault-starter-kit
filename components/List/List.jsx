import styles from './List.module.css';

export default function List({ items }) {
  return (
    <div className={styles.container}>
      {items.map(({ key, value }) => {
        return (
          <div className={styles.item} key={key}>
            <span className={styles.key}>{key}</span>
            <span className={styles.value}>{value}</span>
          </div>
        );
      })}
    </div>
  );
}
