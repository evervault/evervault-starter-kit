import styles from './Request.module.css';

export default function Request({ children, method, url }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.method}>{method}</div>
        <div className={styles.url}>{url}</div>
      </div>
      <div className={styles.payload}>
        <pre>{JSON.stringify(children, null, 2)}</pre>
      </div>
    </div>
  );
}
