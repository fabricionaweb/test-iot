import React from 'react';
import { useActions } from '../../store';
import styles from './Actions.module.css';

const Actions: React.FC = () => {
  const { increase, decrease } = useActions();

  return (
    <div className={styles.wrapper}>
      <button data-testid="increase" type="button" className={styles.button} onClick={increase}>
        +
      </button>
      <button data-testid="decrease" type="button" className={styles.button} onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default Actions;
