import QuickLinks from '@/components/QuickLinks/QuickLinks';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Eliminate the risk of data breaches</h1>
        <p>
          Evervault is an encryption and data security platform built for
          developers.
        </p>
        <p>
          This Starter Kit is a Next.js app with Evervault installed. Each page
          includes a sandbox of a different Evervault product to help you get up
          to speed with the platform. During the integration, we created some
          Evervault resources for you to use, and injected them into this
          project as environment variables.
        </p>
      </div>
      <QuickLinks />
    </main>
  );
}
