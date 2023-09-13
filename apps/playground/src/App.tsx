import { useState } from 'react';

import viteLogo from '../public/vite.svg';

import reactLogo from './assets/react.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="zui-card">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react"
            alt="Reactas das das das das asdasd as das da sd asd as dasd as dasdas da sasd asd as das das dasd as dasdas d logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => {
            setCount((oldCount) => oldCount + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
