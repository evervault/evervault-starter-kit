'use client';
import { EvervaultProvider, EvervaultInput } from '@evervault/react';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Console from '@/components/Console/Console';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { inputsConfig } from './config';
import { sourceUrls } from '../config';
import styles from './page.module.css';

export default function Inputs() {
  const [fullName, setFullName] = useState('Claude Shannon');
  const [email, setEmail] = useState('claude@shannon.com');
  const [inputsData, setInputsData] = useState({});
  const [logStream, setLogStream] = useState([]);

  function handleOnChange(data) {
    setInputsData(data);
    setLogStream((prev) => [
      ...prev,
      {
        type: 'onChange',
        log: data,
      },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLogStream((prev) => [
      ...prev,
      {
        type: 'Submit Form',
        log: { fullName, email, ...inputsData },
      },
    ]);
  }

  return (
    <main>
      <Header
        links={[
          {
            title: 'Docs',
            href: 'https://docs.evervault.com/products/inputs',
          },
          {
            title: 'View Source',
            href: sourceUrls.inputs,
          },
        ]}
      >
        Inputs
      </Header>
      <div className={styles.content}>
        <div>
          <p>
            Evervault Inputs is an embeddable <code>iframe</code> form component
            that allows you to encrypt cardholder data before it touches your
            browser. This means that neither your client nor your server touch
            the cardholder data in plaintext, which significantly reduces your
            PCI Compliance scope. Inputs can be fully{' '}
            <a
              href='https://docs.evervault.com/products/inputs#themes'
              target='_blank'
            >
              customized
            </a>{' '}
            to match your your existing styling.
          </p>
          <EvervaultProvider
            teamId={process.env.NEXT_PUBLIC_TEAM_ID}
            appId={process.env.NEXT_PUBLIC_APP_ID}
          >
            <form onSubmit={handleSubmit}>
              <Input
                label='Full name'
                placeholder='Claude Shannon'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <div className={styles.inputsWrapper}>
                <EvervaultInput
                  onChange={(data) => handleOnChange(data)}
                  config={inputsConfig}
                />
              </div>
              <Input
                label='Email'
                placeholder='claude@shannon.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className={styles.submit}>Submit Form</Button>
            </form>
          </EvervaultProvider>
        </div>
        <div>
          <p>
            Whenever an Inputs field is updated, an <code>onChange</code>{' '}
            function is called and is passed the encrypted values. All
            encryption operations happen within the Evervault{' '}
            <code>iframe</code>. To use the encrypted cardholder data, you can
            proxy it through <Link href='/outbound-relay'>Outbound Relay</Link>{' '}
            or process it in a <Link href='/functions'>Function</Link>.
          </p>
          <Console logStream={logStream} title='Client Console' />
        </div>
      </div>
    </main>
  );
}
