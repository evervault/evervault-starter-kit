import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import styles from './Header.module.css';

export default function Header({ children, links }) {
  return (
    <div className={styles.container}>
      <h2>{children}</h2>
      {links && (
        <div className={styles.links}>
          {links.map(({ title, href }) => {
            return (
              <Link href={href} key={href} target='_blank'>
                <span className={styles.link}>
                  {title} <ArrowUpRight width={14} strokeWidth={2.5} />
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
