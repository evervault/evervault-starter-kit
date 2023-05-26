'use client';
import axios from 'axios';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Pagination from '@/components/Pagination/Pagination';
import { relayDashbordUrl, vercelLogsUrl } from './config';
import Request from '@/components/Request/Request';
import Snippet from '@/components/Snippet/Snippet';
import styles from './page.module.css';

export default function Inputs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [coords, setCoords] = useState({ lat: undefined, long: undefined });
  const [isLoading, setIsLoading] = useState(false);

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setCoords({ lat: coords.latitude, long: coords.longitude })
    );
  }

  async function sendRequest() {
    setIsLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_RELAY_DOMAIN}/inbound-relay/api`,
        {
          lat: coords.lat,
          long: coords.long,
        }
      );
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
        Inbound Relay
      </Header>
      <Pagination activeIndex={activeIndex}>
        <Pagination.Item
          cta={
            <Button
              onClick={() => setActiveIndex(1)}
              disabled={!coords.lat && !coords.long}
            >
              Next Step
            </Button>
          }
        >
          <p>
            Inbound Relay is an encryption proxy that sits between your client
            and your server. When you send data to your server via Inbound
            Relay, it encrypts any configured fields before forwarding the
            request to its original destination. When we installed the Evervault
            integration, we created an Inbound Relay that proxies requests to
            this Vercel URL.
          </p>
          <p>
            In this example, we're going to collect some sensitive data on the
            client: your latitude and longitude coordinates. Then, we're going
            to send them to the server via Inbound Relay where they'll be
            encrypted on the way.
          </p>
          <div className={styles.coordinates}>
            <List
              items={[
                { key: 'Latitude', value: coords.lat },
                { key: 'Longitude', value: coords.long },
              ]}
            />
            {!coords.lat && !coords.long && (
              <div className={styles.buttonOverlay}>
                <Button onClick={getCoordinates}>Get Location Data</Button>
              </div>
            )}
          </div>
        </Pagination.Item>
        <Pagination.Item
          cta={
            <Button
              onClick={sendRequest}
              disabled={!coords.lat && !coords.long}
              isLoading={isLoading}
            >
              Send Request
            </Button>
          }
        >
          <p>
            Great! Now that we've collected some sensitive data, we're going to
            send it to the server via Inbound Relay. This template includes a
            server-side API endpoint called <code>/inbound-relay/api</code> (a
            Next.js{' '}
            <a
              href='https://nextjs.org/docs/app/building-your-application/routing/router-handlers'
              target='_blank'
            >
              Route Handler
            </a>
            ). When we send the following request to the Inbound Relay we
            created during the integration, it'll be forwarded to the{' '}
            <code>/inbound-relay/api</code> endpoint.
          </p>
          <Request
            method='POST'
            url={`${process.env.NEXT_PUBLIC_RELAY_DOMAIN}/inbound-relay/api`}
          >
            {coords}
          </Request>
          <p>
            Since <code>lat</code> and <code>long</code> are configured as{' '}
            <em>fields to encrypt</em>{' '}
            <a href={`${relayDashbordUrl}/encrypted-fields`} target='_blank'>
              in the Evervault Dashboard
            </a>
            , those fields will be encrypted by Inbound Relay before being
            forwarded.
          </p>
        </Pagination.Item>
        <Pagination.Item>
          <p>
            The request was successfully sent to the server via Inbound Relay!
          </p>
          <p>
            If you{' '}
            <a href={vercelLogsUrl} target='_blank'>
              check your Vercel Logs
            </a>
            , you'll notice that the fields <code>lat</code> and{' '}
            <code>long</code> are encrypted.
          </p>
          <p>
            Try changing the fields to encrypt{' '}
            <a href={`${relayDashbordUrl}/encrypted-fields`} target='_blank'>
              in the Evervault Dashboard
            </a>{' '}
            and resending the request using the <code>curl</code> snippet below.
            If you remove <code>lat</code> and <code>long</code> from the list
            of fields to encrypt, you'll see that they're no longer encrypted in
            the Vercel logs.
          </p>
          <Snippet>
            {`curl -H "Content-type: application/json" -d '{"lat": ${coords.lat}, "long": ${coords.long}}' '${process.env.NEXT_PUBLIC_RELAY_DOMAIN}/inbound-relay/api'`}
          </Snippet>
        </Pagination.Item>
      </Pagination>
    </main>
  );
}
