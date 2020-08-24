import React from 'react';

import handleToggle from '../../utils/showMenu';

import { HeaderWrapper, HeaderContent, DropboxLogo } from './styles';

const Header: React.FC = () => {
  const buttonVariant = Math.round(Math.random());
  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button type="button" onClick={handleToggle}>
          {buttonVariant === 0 ? 'Interagir' : 'Acessar'}
        </button>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
