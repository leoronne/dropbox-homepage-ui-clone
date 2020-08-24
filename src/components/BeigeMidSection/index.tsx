import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../Header';

import hero from '~/assets/img/hero.png';

import { Container, Content } from './styles';

const BeigeMidSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container id="beigemid-section">
      <Header />
      <Content>
        <div className="hero-image">
          <img src={hero} alt="Dropbox" />
        </div>
        <div className="text-content">
          <h2>{t('beigemidsection-title-1')}</h2>
          <p>{t('beigemidsection-title-2')}</p>
        </div>
      </Content>
    </Container>
  );
};

export default BeigeMidSection;
