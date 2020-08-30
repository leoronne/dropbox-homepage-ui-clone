import React from 'react';
import { useTranslation } from 'react-i18next';

import scrollInto from '../../utils/scrollInto';

import { useToggleMenu } from '../../hooks/useToggleMenu';

import Header from '../Header';
import { ReactComponent as ArrowIcon } from '~/assets/svg/arrow.svg';

import hero from '~/assets/img/hero.png';

import { Container, Content, GitHubIcon } from './styles';

const SubHeader: React.FC = () => {
  const { setFormActive, handleToggle } = useToggleMenu();
  const { t } = useTranslation();
  //

  return (
    <Container id="top-content">
      <Header />

      <Content>
        <h4>
          Dropbox UI Clone
          <GitHubIcon onClick={() => window.open('https://github.com/leoronne/dropbox-homepage-ui-clone', 'blank')} />
        </h4>
        <h2>{t('subheader-title-1')}</h2>
        <p>{t('subheader-title-2')}</p>
        <div
          className="subheader-link"
          onClick={() => {
            handleToggle();
            setFormActive(true);
          }}
        >
          {t('subheader-button-1')}
        </div>

        <div className="arrow-down">
          <ArrowIcon onClick={() => scrollInto('beigemid-section')} />
        </div>

        <div className="hero-image">
          <img src={hero} alt="Dropbox" />
        </div>
      </Content>
    </Container>
  );
};

export default SubHeader;
