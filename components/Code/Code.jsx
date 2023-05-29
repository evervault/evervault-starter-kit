import { Highlight, Prism } from 'prism-react-renderer';

import styles from './Code.module.css';
import { theme } from './config';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

export default function Code({ code, language = 'js', request }) {
  return (
    <div className={styles.container}>
      {request && (
        <div className={styles.request}>
          <div className={styles.method}>{request.method}</div>
          <div className={styles.url}>{request.url}</div>
        </div>
      )}
      <Highlight code={code} language={language} theme={theme}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className={styles.code} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className={styles.lineNumber}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
