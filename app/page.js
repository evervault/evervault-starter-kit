import { BookIcon, Monitor } from 'lucide-react';

import List from '@/components/List/List';
import QuickLinks from '@/components/QuickLinks/QuickLinks';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome, developer</h1>
      <p>
        This Starter Kit is a Next.js app with Evervault installed. Each page
        includes a sandbox of a different Evervault product to help you get up
        to speed with the platform.
      </p>
      <p>
        As you can see below, we've already populated your credentials for you.
        We also provisioned some Evervault resources during the integration
        which you'll be able to explore on each page.
      </p>
      <List
        items={[
          { key: 'Team ID', value: process.env.NEXT_PUBLIC_TEAM_ID },
          { key: 'App ID', value: process.env.NEXT_PUBLIC_APP_ID },
        ]}
      />
      <p>
        Evervault is an encryption and data security platform built for
        developers like you. We've included some additional resources below to
        help you get up to speed.
      </p>
      <QuickLinks
        links={[
          {
            title: 'Read the Evervault Docs',
            href: 'https://docs.evervault.com',
            icon: <BookIcon width={18} />,
          },
          {
            title: 'Go the the Dashboard',
            href: 'https://app.evervault.com',
            icon: <Monitor width={18} />,
          },
        ]}
      />
    </main>
  );
}
