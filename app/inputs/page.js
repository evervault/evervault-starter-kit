'use client';
import { EvervaultProvider, EvervaultInput } from '@evervault/react';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Console from '@/components/Console/Console';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { inputsConfig } from './config';
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
          { title: 'Docs', href: 'https://docs.evervault.com/' },
          { title: 'GitHub', href: 'https://docs.evervault.com' },
        ]}
      >
        Inputs
      </Header>
      <div className={styles.content}>
        <div>
          <p>
            Evervault Inputs are embeddable iframe form components which allow
            you to collect cardholder data and encrypt it before it touches your
            client. This is particularly useful as it significantly reduces your
            PCI Compliance scope.
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
            Inputs is a React component (or a JavaScript embed) which supports
            an <code>onChange</code> function. Whenever an Inputs field is
            updated, this function is called and is passed the encrypted values.
            All encryption happens on Evervault infrastructure.
          </p>
          <Console logStream={logStream} title='Client Console' />
        </div>
      </div>
    </main>
  );
}
