'use client';
import axios from 'axios';
import { EvervaultProvider } from '@evervault/react';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Chart from '@/components/Chart/Chart';
import Coordinates from '@/components/Coordinates/Coordinates';
import Header from '@/components/Header/Header';
import { logsUrl } from './config';
import Pagination from '@/components/Pagination/Pagination';
import { sourceUrls } from '../config';
import Snippet from '@/components/Snippet/Snippet';
import styles from './page.module.css';

export default function OutboundRelay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [coords, setCoords] = useState({ lat: undefined, long: undefined });
  const [result, setResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function sendRequest() {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`/outbound-relay/api`, {
        lat: coords.lat,
        long: coords.long,
      });
      setResult(data);
      setActiveIndex(3);
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
          {
            title: 'Docs',
            href: 'https://docs.evervault.com/products/outbound-relay',
          },
          {
            title: 'View Source',
            href: sourceUrls.outboundRelay,
          },
        ]}
      >
        Outbound Relay
      </Header>
      <Pagination activeIndex={activeIndex}>
        <Pagination.Item
          cta={<Button onClick={() => setActiveIndex(1)}>Next Step</Button>}
        >
          <p>
            Outbound Relay is an decryption proxy that allows you to share
            Evervault-encrypted data from your server to third-party APIs. Under
            the hood, Outbound Relay is an HTTP <code>CONNECT</code> proxy that
            intercepts requests from your API to specific third-party endpoints,
            terminates TLS and swaps encrypted data with the original plaintext.
            By the time the request reaches the third-party API, all fields are
            decrypted, and the request will appear as a valid API request for
            the third-party.
          </p>
          <p>
            To use Outbound Relay, simply include and initialize the Evervault
            SDK in your application and enable outbound relay. Outbound Relay
            can be used in any of our 
            <a
              href='https://docs.evervault.com/sdks/platforms#server-side'
              target='_blank'
            >
              server-side SDKs
            </a>
            . Once you have included the Evervault SDK in your application,
            Outbound Relay can be enabled for specific domains within the
            Evervault Dashboard.
          </p>
        </Pagination.Item>
        <Pagination.Item
          cta={
            <Button
              onClick={() => setActiveIndex(2)}
              disabled={!coords.lat && !coords.long}
            >
              Next Step
            </Button>
          }
        >
          <p>
            In this example, we’re going to send a request from the server to{' '}
            <a href='https://open-meteo.com/en/docs'>
              Open-Meteo’s Weather API
            </a>{' '}
            using encrypted latitude and longitude coordinates as parameters.
            Outbound Relay will automatically decrypt the coordinates, allowing
            the request to be fulfilled.{' '}
          </p>
          <p>
            First, we’ll collect your latitude and longitude coordinates from
            the browser and encrypt them using the{' '}
            <a href=''>Evervault React SDK.</a>
          </p>
          <EvervaultProvider
            teamId={process.env.NEXT_PUBLIC_TEAM_ID}
            appId={process.env.NEXT_PUBLIC_APP_ID}
          >
            <Coordinates coords={coords} setCoords={setCoords} encrypt />
          </EvervaultProvider>
        </Pagination.Item>
        <Pagination.Item
          cta={
            <Button onClick={sendRequest} isLoading={isLoading}>
              Send Request
            </Button>
          }
        >
          <p>
            Great! Now that we have an encrypted coordinate pair, we're going to
            send a request from the server to the weather API.
          </p>
          <p>
            This template includes a simple Next.js{' '}
            <a
              href='https://nextjs.org/docs/app/building-your-application/routing/router-handlers'
              target='_blank'
            >
              Route Handler
            </a>{' '}
            at <code>/outbound-relay/api</code>. If you view the source, you'll
            see that the Evervault Node SDK has been included and initialized,
            and that the <code>enableOutboundRelay</code> function has been
            called. We're going to call the Route Handler from the browser, and
            the Route Handler will send a request to the weather API.
          </p>
          <p>
            During the integration, we also created an Outbound Relay
            destination in the <a href=''>Evevault Dashboard</a> for the weather
            API endpoint.
          </p>
          <p>
            Here's the endpoint we're going to hit from the server. Notice how
            the parameters for <code>latitude</code> and <code>longitude</code>{' '}
            are encrypted.
          </p>
          <Snippet>
            {`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&hourly=temperature_2m`}
          </Snippet>
        </Pagination.Item>
        <Pagination.Item>
          <p>
            Success! The request to the weather API succeeded even though we
            sent encrypted <code>latitude</code> and <code>longitude</code>{' '}
            parameters. Outbound Relay intercepted the request, decrypted the
            parameters, and forwarded the request to the weather API; your
            server never touched the plaintext coordinates. Here's the response
            from the weather API showing the 5-day temperature forecast for your
            location:
          </p>
          <Chart data={result} />
          <p>
            You can find logs for this request in the{' '}
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
