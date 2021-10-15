import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from './store/auth-context';

import './index.scss';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
