import { useEvervault } from '@evervault/react';

import Button from '@/components/Button/Button';
import List from '@/components/List/List';
import styles from './Coordinates.module.css';

export default function Coordinates({ coords, setCoords }) {
  const evervault = useEvervault();

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const plaintextCoords = { lat: coords.latitude, long: coords.longitude };
      const encryptedCoords = await evervault.encrypt(plaintextCoords);
      return setCoords({
        lat: encryptedCoords.lat,
        long: encryptedCoords.long,
      });
    });
  }

  return (
    <div className={styles.container}>
      <List
        items={[
          { key: 'Latitude', value: coords.lat },
          { key: 'Longitude', value: coords.long },
        ]}
      />
      {!coords.lat && !coords.long && (
        <div className={styles.buttonOverlay}>
          <Button onClick={getCoordinates}>Get Coorinates</Button>
        </div>
      )}
    </div>
  );
}
