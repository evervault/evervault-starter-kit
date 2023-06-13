import { useEvervault } from '@evervault/react';
import { useState } from 'react';

import styles from './InputFields.module.css';
import Input from '@/components/Input/Input';

export default function InputsFields() {
  const evervault = useEvervault();

  const [name, setName] = useState('Claude Shannon');
  const [encryptedName, setEncryptedName] = useState('');

  async function encrypt() {
    const encrypted = await evervault.encrypt(name);
    setEncryptedName(encrypted);
  }

  return (
    <div className={styles.inputs}>
      <div className={styles.inputWrapper}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label='Plaintext'
          action={
            <button
              className={styles.encryptButton}
              onClick={encrypt}
              disabled={!name}
            >
              Encrypt
            </button>
          }
        />
      </div>
      <Input
        value={encryptedName}
        onChange={(e) => setEncryptedName(e.target.value)}
        label='Encrypted'
        disabled
      />
    </div>
  );
}
