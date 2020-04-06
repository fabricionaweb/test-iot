import React from 'react';
import { useActions } from '../../store';
import styles from './Actions.module.css';

const Actions: React.FC = () => {
  const { increase, decrease } = useActions();

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.button} onClick={increase}>
        +
      </button>
      <button type="button" className={styles.button} onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default Actions;
