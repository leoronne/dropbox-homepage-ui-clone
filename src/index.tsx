import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import LoaderSpinner from './components/LoaderSpinner';

import App from './App';
import i18n from './i18n';

ReactDOM.render(
  <React.Suspense fallback={<LoaderSpinner />}>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </React.Suspense>,
  document.getElementById('root')
);
