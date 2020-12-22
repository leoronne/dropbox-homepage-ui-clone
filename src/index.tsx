import React from 'react';
import ReactDOM from 'react-dom';

import { LoaderSpinner } from './components';

import AppProvider from './hooks';

import App from './App';

ReactDOM.render(
  <React.Suspense fallback={<LoaderSpinner color="#0d2f81" />}>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);
