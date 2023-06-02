import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

import { animationConfig } from './config';
import styles from './Snippet.module.css';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

const MotionCheck = motion(Check);
const MotionCopy = motion(Copy);

export default function Snippet({ children, copiable = false }) {
  const { copy, copied } = useCopyToClipboard();

  function handleCopy() {
    const snippet = document.getElementById('snippet').innerText;
    copy(snippet);
  }

  return (
    <div className={styles.container}>
      <div className={styles.code} id='snippet'>
        {children}
      </div>
      {copiable && (
        <button className={styles.copy} onClick={handleCopy}>
          <AnimatePresence mode='wait' initial={false}>
            {!copied ? (
              <MotionCopy width={16} {...animationConfig} />
            ) : (
              <MotionCheck width={16} {...animationConfig} />
            )}
          </AnimatePresence>
        </button>
      )}
    </div>
  );
}
