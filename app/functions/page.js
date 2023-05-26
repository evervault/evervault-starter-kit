'use client';
import axios from 'axios';
import { EvervaultProvider } from '@evervault/react';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Code from '@/components/Code/Code';
import Coordinates from './components/Coordinates/Coordinates';
import { functionCode, logsUrl } from './config';
import Header from '@/components/Header/Header';
import Pagination from '@/components/Pagination/Pagination';
import styles from './page.module.css';

export default function Functions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [coords, setCoords] = useState({ lat: undefined, long: undefined });
  const [result, setResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function runFunction() {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`/functions/api`, {
        lat: coords.lat,
        long: coords.long,
      });
      setResult(data);
      setActiveIndex(2);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.main}>
      <Header
        links={[
          { title: 'Docs', href: 'https://docs.evervault.com/' },
          { title: 'GitHub', href: 'https://docs.evervault.com' },
        ]}
      >
        Functions
      </Header>
      <Pagination activeIndex={activeIndex}>
        <Pagination.Item
          cta={<Button onClick={() => setActiveIndex(1)}>Next Step</Button>}
        >
          <p>
            Evervault Functions lets you process data encrypted by Evervault
            using secure serverless functions that are hosted on Evervault’s
            infrastructure and written in Node.js or Python.
          </p>
          <p>
            Any encrypted data that is passed to a Function is decrypted by the
            Function’s runtime. This allows you to process and run logic on that
            data as you normally would — without handling it in plaintext on
            your infrastructure.
          </p>
          <p>
            When you installed the integration, we deployed{' '}
            <a href=''> an Evervault Function</a> for you called{' '}
            <code>get-distance-to-new-york</code>. The Function takes latitude
            and longitude coordinates as a payload and returns the distance in
            kilometres from that location to New York. If we pass an encrypted{' '}
            <code>lat</code> and <code>long</code>, the Function’s runtime will
            automatically decrypt the payload and run the calculation on the
            plaintext values.{' '}
          </p>
        </Pagination.Item>
        <Pagination.Item
          cta={
            <Button
              onClick={runFunction}
              isLoading={isLoading}
              disabled={!coords.lat && !coords.long}
            >
              Run Function
            </Button>
          }
        >
          <p>
            Here's the code for the Function we deployed during the integration:
          </p>
          <Code code={functionCode} />
          <p>
            Before we invoke the Function, we’ll collect and encrypt some data
            to pass as a payload. The Function accepts <code>lat</code> and{' '}
            <code>long</code> coordinates, so we'll get these using the
            browser's Geolocation API. Then, we'll encrypt them locally using
            the{' '}
            <a href='https://docs.evervault.com/sdks/reactjs'>
              Evervault React SDK
            </a>{' '}
            before sending them to the Function.
          </p>
          <EvervaultProvider
            teamId={process.env.NEXT_PUBLIC_TEAM_ID}
            appId={process.env.NEXT_PUBLIC_APP_ID}
          >
            <Coordinates coords={coords} setCoords={setCoords} />
          </EvervaultProvider>
        </Pagination.Item>
        <Pagination.Item>
          <p>Success! Here's the response from the Function:</p>
          <Code code={JSON.stringify(result, null, 2)} language='json' />
          <p>
            You'll notice that the Function response also includes a{' '}
            <code>runId</code> and an <code>appUuid</code>. The{' '}
            <code>runId</code> is a unique identifier for this Function's
            invocation, and the <code>appUuid</code> is the identifier for the
            Evervault App that this Function belongs to.
          </p>
          <p>
            You can see a log of this invocation in the{' '}
            <a href={logsUrl} target='_blank'>
              Evervault Dashboard
            </a>
            .
          </p>
        </Pagination.Item>
      </Pagination>
    </main>
  );
}
