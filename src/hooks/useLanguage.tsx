import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from 'i18next';

interface LanguageContextProps {
  changeLanguage(lgn: string): void;
  language: string;
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('en');

  function changeLanguage(lgn: string) {
    i18n.changeLanguage(lgn);
    localStorage.setItem('defaultLanguage', lgn);
    setLanguage(lgn);
  }

  useEffect(() => {
    const lgnstrg = localStorage.getItem('defaultLanguage');
    changeLanguage(lgnstrg || 'en');
  }, []);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};

function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within an LanguageProvider');
  }

  return context;
}

export { LanguageProvider, useLanguage };
