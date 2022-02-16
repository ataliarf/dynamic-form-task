import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-nhowqmpxokqk.frontegg.com',
};

ReactDOM.render(
  <FronteggProvider contextOptions={contextOptions}>
    <App />
    </FronteggProvider>,
  document.getElementById('root')
);