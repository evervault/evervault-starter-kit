import styles from './Spinner.module.css';
import cn from 'classnames';

export default function Spinner({ className }) {
  return <div className={cn(styles.spinner, className)}></div>;
}
