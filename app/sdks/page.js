'use client';
import { EvervaultProvider } from '@evervault/react';

import Header from '@/components/Header/Header';
import InputsFields from './components/InputsFields/InputFields';
import { sourceUrls } from '../config';
import styles from './page.module.css';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import QuickLinks from '@/components/QuickLinks/QuickLinks';

export default function Functions() {
  return (
    <main className={styles.main}>
      <Header
        links={[
          {
            title: 'Docs',
            href: 'https://docs.evervault.com/sdks/platforms',
          },
          {
            title: 'View Source',
            href: sourceUrls.sdks,
          },
        ]}
      >
        SDKs
      </Header>
      <p>
        The simplest way to encrypt data with Evervault is by using one of our{' '}
        <a href='https://docs.evervault.com/sdks/platforms' target='_blank'>
          client-side or server-side SDKs
        </a>
        . Each SDK includes an <code>encrypt()</code> function, which accepts a{' '}
        <code>String</code> or an <code>Object</code>. You can also pass a{' '}
        <code>Buffer</code> for file encryption. Try it out by encrypting the
        name in the input field below!{' '}
      </p>
      <EvervaultProvider
        teamId={process.env.NEXT_PUBLIC_TEAM_ID}
        appId={process.env.NEXT_PUBLIC_APP_ID}
      >
        <InputsFields />
      </EvervaultProvider>
      <p>
        If you need to use that encrypted data, it can be processed in a{' '}
        <Link href='functions'>Function</Link>, or shared with third-party APIs
        using <Link href='outbound-relay'>Outbound Relay</Link>.
      </p>
      <Callout>
        To ensure that plaintext sensitive data never touches your
        infrastructure in plaintext, consider using{' '}
        <Link href='inbound-relay'>Inbound Relay</Link> for encryption.
      </Callout>
      <QuickLinks exclude='SDKs'></QuickLinks>
    </main>
  );
}
