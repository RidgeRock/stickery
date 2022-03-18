import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
