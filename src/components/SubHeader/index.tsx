import React from 'react';
import { useTranslation } from 'react-i18next';

import handleToggle from '../../utils/showMenu';

import Header from '../Header';
import { ReactComponent as ArrowIcon } from '~/assets/svg/arrow.svg';

import hero from '~/assets/img/hero.png';

import { Container, Content } from './styles';

const SubHeader: React.FC = () => {
  const { t } = useTranslation();

  const scrollInto = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <Header />

      <Content>
        <h4>Dropbox</h4>
        <h2>{t('subheader-title-1')}</h2>
        <p>{t('subheader-title-2')}</p>
        <div className="subheader-link" onClick={() => handleToggle()}>
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
