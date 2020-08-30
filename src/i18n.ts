import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

const lgnstrg = localStorage.getItem('defaultLanguage');

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,

    lng: lgnstrg || 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'pt', 'es', 'fr'],

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
