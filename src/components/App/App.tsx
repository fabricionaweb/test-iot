import React from 'react';
import Balance from '../Balance/Balance';
import Actions from '../Actions/Actions';
import { Provider } from '../../store';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Provider>
      <main className={styles.wrapper}>
        <Balance />
        <Actions />
      </main>
    </Provider>
  );
};

export default App;
