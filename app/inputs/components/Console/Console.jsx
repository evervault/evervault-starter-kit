import { ChevronUp, Terminal } from 'lucide-react';
import { useEffect, useRef } from 'react';

import styles from './Console.module.css';
import useResizeConsole from './hooks/useResizeConsole';

export default function Console({ logStream, title }) {
  const logStreamRef = useRef(null);
  const { startResizing, height, isResizing, toggleMobileExpand } =
    useResizeConsole();

  useEffect(() => {
    const container = logStreamRef.current;
    container.scrollTop = container.scrollHeight;
  }, [logStream]);

  return (
    <div
      className={styles.container}
      style={{
        height: `${height}px`,
        userSelect: isResizing ? 'none' : 'auto',
      }}
    >
      <div className={styles.resizeHandle} onMouseDown={startResizing} />
      <div className={styles.title}>
        <Terminal width={16} />
        {title}
        <ChevronUp
          className={styles.chevron}
          width={16}
          onClick={toggleMobileExpand}
          data-active={height === 500}
        />
      </div>
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
