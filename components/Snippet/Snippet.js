import styles from './Snippet.module.css';

export default function Snippet({ children }) {
  return <div className={styles.container}>{children}</div>;
}
