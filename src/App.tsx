import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';
import SubFooter from './components/SubFooter';
import Footer from './components/Footer';

import { LanguageProvider } from './hooks/useLanguage';

import data from './data';

function App() {
  return (
    <>
      <LanguageProvider>
        <Section variant="blue" title={data[0].title} description={data[0].description} />
        <Section variant="beige" title={data[1].title} description={data[1].description} />
        <Section variant="blue" title={data[2].title} description={data[2].description} />
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
