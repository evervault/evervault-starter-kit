import Link from 'next/link';
import styles from './Header.module.css';
import { ArrowUpRight } from 'lucide-react';

export default function Header({ children, links }) {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
      {links && (
        <div className={styles.links}>
          {links.map(({ title, href }) => {
            return (
              <Link href='/' key={href}>
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
