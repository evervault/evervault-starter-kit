import QuickLinks from '@/components/QuickLinks/QuickLinks';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Secure sensitive customer data</h1>
        <p>
          Evervault is an encryption and data security platform for developers.
          Using Evervault allows you to keep sensitive data encrypted at all
          times, without compromising your ability to use that data.
        </p>
        <p>
          This Starter Kit is a Next.js app with Evervault installed. Each page
          includes a sandbox of each Evervault product to help you get up to
          speed with the platform. During the integration, we created some
          Evervault products for you to use, and injected them into this project
          as environment variables.
        </p>
        <p>
          Get started by selecting which product you’d like to explore first.
        </p>
      </div>
      <QuickLinks />
    </main>
  );
}
