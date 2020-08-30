import React from 'react';
import { useTranslation } from 'react-i18next';

import scrollInto from '../../utils/scrollInto';

import { useToggleMenu } from '../../hooks/useToggleMenu';

import { HeaderWrapper, HeaderContent, DropboxLogo, MenuIcon } from './styles';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { setFormActive, handleToggle } = useToggleMenu();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <div className="header-left">
          <h1>
            <DropboxLogo onClick={() => scrollInto('top-content')} />
            <span>Dropbox</span>
          </h1>
          <a href="https://www.dropbox.com/business" target="_blank" rel="noopener noreferrer">
            {t('header-button-1')}
          </a>

          <a href="https://www.dropbox.com/individual" target="_blank" rel="noopener noreferrer">
            {t('header-button-2')}
          </a>
        </div>

        <div className="access-buttons">
          <button
            type="button"
            onClick={() => {
              handleToggle();
              setFormActive(false);
            }}
            id="signin-button"
          >
            {t('widget-signin')}
          </button>

          <button
            type="button"
            onClick={() => {
              handleToggle();
              setFormActive(true);
            }}
          >
            <p>{t('widget-signup-button-2')}</p>
            <MenuIcon />
          </button>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
