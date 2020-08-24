import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';
import SubHeader from './components/SubHeader';
import BeigeMidSection from './components/BeigeMidSection';
import BlueMidSection from './components/BlueMidSection';
import SubFooter from './components/SubFooter';
import Footer from './components/Footer';

import { LanguageProvider } from './hooks/useLanguage';

function App() {
  return (
    <>
      <LanguageProvider>
        <SubHeader />
        <BeigeMidSection />
        <BlueMidSection />
        <SubFooter />
        <Footer />

        <SideMenu>
          <MenuForm />
        </SideMenu>
      </LanguageProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
