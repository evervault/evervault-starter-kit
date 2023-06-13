import { useEvervault } from '@evervault/react';

import Button from '@/components/Button/Button';
import styles from './Coordinates.module.css';

export default function Coordinates({ coords, setCoords, encrypt = false }) {
  const evervault = useEvervault();

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      if (!encrypt) {
        return setCoords({
          lat: coords.latitude,
          long: coords.longitude,
        });
      }
      let encryptedCoords = await evervault.encrypt({
        lat: coords.latitude,
        long: coords.longitude,
      });
      return setCoords({
        lat: encryptedCoords.lat,
        long: encryptedCoords.long,
      });
    });
  }

  async function getSampleCoordinates() {
    // Coordinates of Dublin, Ireland
    const dublinCoords = { lat: 53.3498, long: -6.2603 };

    if (!encrypt) return setCoords(dublinCoords);

    let encryptedCoords = await evervault.encrypt(dublinCoords);
    return setCoords({
      lat: encryptedCoords.lat,
      long: encryptedCoords.long,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.coordinates}>
        <div className={styles.item}>
          <span className={styles.key}>Latitude</span>
          <span className={styles.value}>{coords.lat}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.key}>Longitude</span>
          <span className={styles.value}>{coords.long}</span>
        </div>
        {!coords.lat && !coords.long && (
          <div className={styles.buttonOverlay}>
            <Button onClick={getCoordinates}>Get Coordinates</Button>
          </div>
        )}
      </div>
      {!coords.lat && !coords.long && (
        <div className={styles.helper}>
          <p>
            If you would prefer to use sample coordinates instead,{' '}
            <button
              className={styles.sampleCoordsButton}
              onClick={getSampleCoordinates}
            >
              click here
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
}
