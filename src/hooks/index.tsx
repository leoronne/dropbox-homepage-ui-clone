import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';

import { LanguageProvider, useLanguage } from './useLanguage';
import { ToggleMenuProvider, useToggleMenu } from './useToggleMenu';

const AppProvider: React.FC = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <LanguageProvider>
      <ToggleMenuProvider>{children}</ToggleMenuProvider>
    </LanguageProvider>
  </I18nextProvider>
);

export { useLanguage, useToggleMenu };
export default AppProvider;
