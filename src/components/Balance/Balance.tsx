import React, { useEffect } from 'react';
import { useStore, useActions } from '../../store';
import { useCurrencies } from '../../services';
import styles from './Balance.module.css';

const Balance: React.FC = () => {
  const { state } = useStore();
  const { update } = useActions();
  const { data, error } = useCurrencies();

  const { balance, currency } = state;
  const isWarning = balance < 0;

  useEffect(() => {
    if (data && !error) {
      update(data);
    }
  }, [data, error, update]);

  return (
    <div
      data-testid="balance"
      className={[styles.wrapper, isWarning ? styles.isWarning : ''].join(' ')}
    >
      {currency} {balance.toFixed(2)}
    </div>
  );
};

export default Balance;
