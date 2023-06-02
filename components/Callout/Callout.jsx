import styles from './Callout.module.css';

export default function Callout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
