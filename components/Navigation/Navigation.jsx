'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import Button from '../Button/Button';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'SDKs', path: '/sdks' },
  { title: 'Inbound Relay', path: '/inbound-relay' },
  { title: 'Outbound Relay', path: '/outbound-relay' },
  { title: 'Functions', path: '/functions' },
  { title: 'Inputs', path: '/inputs' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image
            src='/logo.svg'
            width={40}
            height={40}
            alt='Purple Evervault logo'
          />
          <Image
            src='/starter-kit-banner.svg'
            width={108}
            height={108}
            alt='Banner that says Starter Kit drawn on a circular path around the Evervault logo'
            className={styles.starterKitBanner}
          />
        </div>
      </Link>
      <nav className={styles.navigation}>
        {pages.map(({ title, path }) => (
          <Link href={path} key={path} tabIndex={-1}>
            <motion.button
              className={styles.navigationItem}
              initial={false}
              animate={{
                color: pathname === path ? 'var(--grey-00)' : 'var(--grey-90)',
              }}
            >
              {pathname === path && (
                <motion.div
                  className={styles.indicator}
                  layoutId='indicator'
                  style={{ borderRadius: 32 }}
                />
              )}
              {title}
            </motion.button>
          </Link>
        ))}
      </nav>
      <Link
        href='https://app.evervault.com'
        target='_blank'
        className={styles.dashboard}
      >
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
}
