import React from 'react';
import { Provider } from '../../store';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Provider>
      <main className={styles.wrapper}>
        <header>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    </Provider>
  );
};

export default App;
