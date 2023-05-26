import { Highlight, Prism } from 'prism-react-renderer';

import styles from './Code.module.css';
import { theme } from './config';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

export default function Code({ code, language }) {
  return (
    <div className={styles.container}>
      <Highlight code={code} language='js' theme={theme}>
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
