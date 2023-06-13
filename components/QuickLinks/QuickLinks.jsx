'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { links } from './config';
import styles from './QuickLinks.module.css';

export default function QuickLinks({ exclude = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <LayoutGroup id={`layout-${pathname}`}>
          {links.map(({ title }, index) => {
            return (
              <motion.button
                key={`button-${title}`}
                className={styles.navigationItem}
                onClick={() => setActiveIndex(index)}
                data-active={index === activeIndex}
              >
                {index === activeIndex && (
                  <motion.div
                    className={styles.indicator}
                    layoutId='active-indicator'
                  />
                )}
                {title}
              </motion.button>
            );
          })}
        </LayoutGroup>
      </nav>
      {links
        .filter(({ title }) => title === links[activeIndex].title)
        .map(({ children, title }) => {
          return (
            <div className={styles.links} key={title}>
              {children
                .filter(({ title }) => title !== exclude)
                .map(({ icon, title, description, href }) => {
                  return (
                    <Link href={href} key={title} className={styles.link}>
                      <div className={styles.heading}>
                        <span className={styles.icon}>{icon}</span>
                        {title}
                        <span className={styles.chevron}>
                          <ChevronRight width={16} />
                        </span>
                      </div>
                      <div className={styles.description}>{description}</div>
                    </Link>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}
