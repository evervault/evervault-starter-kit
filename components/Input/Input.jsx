import styles from './Input.module.css';

export default function Input({ label, action, ...props }) {
  return (
    <label className={styles.label}>
      {label}
      <div className={styles.fieldWrapper}>
        <input className={styles.input} {...props} />
        {action && action}
      </div>
    </label>
  );
}
