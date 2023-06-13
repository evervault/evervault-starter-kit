'use client';
import { EvervaultProvider, EvervaultInput } from '@evervault/react';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Console from '@/components/Console/Console';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { inputsConfig } from './config';
import { sourceUrls } from '../config';
import styles from './page.module.css';
import QuickLinks from '@/components/QuickLinks/QuickLinks';

export default function Inputs() {
  const [fullName, setFullName] = useState('Claude Shannon');
  const [inputsData, setInputsData] = useState({});
  const [logStream, setLogStream] = useState([]);

  function handleOnChange(data) {
    const log = {
      type: data.encryptedCard.type,
      number: data.encryptedCard.number,
      expMonth: data.encryptedCard.expMonth,
      expYear: data.encryptedCard.expYear,
      cvc: data.encryptedCard.cvc,
    };
    setInputsData(log);
    setLogStream((prev) => [
      ...prev,
      {
        type: 'onChange',
        log,
      },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLogStream((prev) => [
      ...prev,
      {
        type: 'Submit Form',
        log: {
          fullName,
          ...inputsData,
        },
      },
    ]);
  }

  return (
    <main className={styles.main}>
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
            Inputs is an <code>iframe</code> form that lets you encrypt
            cardholder data before it touches your browser. This means that
            neither your client nor your server touch the cardholder data in
            plaintext, which significantly reduces your PCI Compliance scope.
            Inputs can be{' '}
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
              <Button className={styles.submit}>Submit Form</Button>
            </form>
          </EvervaultProvider>
        </div>
        <QuickLinks exclude='Inputs' />
        <Console logStream={logStream} title='Client Console' />
      </div>
    </main>
  );
}
