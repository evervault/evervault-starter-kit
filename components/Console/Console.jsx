import { useEffect, useRef } from 'react';
import styles from './Console.module.css';

export default function Console({ logStream, title }) {
  const logStreamRef = useRef(null);

  useEffect(() => {
    const container = logStreamRef.current;
    container.scrollTop = container.scrollHeight;
  }, [logStream]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.logStream} ref={logStreamRef}>
        {logStream.map(({ type, log }, index) => {
          return (
            <div className={styles.log} key={log + index}>
              <span className={styles.type}>{type}</span>
              <pre>{JSON.stringify(log, null, 2)}</pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}
