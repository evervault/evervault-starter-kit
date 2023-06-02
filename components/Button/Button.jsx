import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import Spinner from '../Spinner/Spinner';
import styles from './Button.module.css';

export default function Button({
  children,
  className,
  isLoading,
  disabled,
  ...props
}) {
  return (
    <button
      {...props}
      className={cn(styles.button, className)}
      disabled={disabled || isLoading}
    >
      <motion.span initial={false} animate={{ opacity: isLoading ? 0 : 1 }}>
        {children}
      </motion.span>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={styles.spinnerContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Spinner />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
