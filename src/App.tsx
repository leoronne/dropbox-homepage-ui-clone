import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import { SideMenu, MenuForm, BeigeMidSection, BlueMidSection, Footer, SubFooter, SubHeader } from './components';

const App: React.FC = () => {
  return (
    <>
      <SubHeader />
      <BeigeMidSection />
      <BlueMidSection />
      <SubFooter />
      <Footer />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  );
};

export default App;
