import Link from 'next/link';

import styles from './QuickLinks.module.css';

export default function QuickLinks({ links }) {
  return (
    <div className={styles.container}>
      {links.map(({ title, href, icon }) => {
        return (
          <Link href={href} key={title}>
            <div className={styles.link}>
              <span className={styles.icon}>{icon}</span>
              {title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
