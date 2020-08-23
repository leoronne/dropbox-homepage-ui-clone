import React from 'react';
import { useTranslation } from 'react-i18next';

import handleToggle from '../../utils/showMenu';

import { Container, HeaderWrapper, Header, DropboxLogo, Content } from './styles';

const SubFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button type="button" onClick={handleToggle}>
            Acessar
          </button>
        </Header>
      </HeaderWrapper>

      <Content>
        <section>
          <h3>{t('subfooter-title-1')}</h3>
          <main>
            <div className="col">
              <h1>{t('subfooter-title-2')}</h1>
              <a href="https://www.dropbox.com/individual" className="subfooter-link" target="_blank" rel="noopener noreferrer">
                {t('subfooter-button-1')}
              </a>
            </div>
            <div className="col">
              <h1>{t('subfooter-title-3')}</h1>
              <a href="https://www.dropbox.com/business" className="subfooter-link" target="_blank" rel="noopener noreferrer">
                {t('subfooter-button-2')}
              </a>
            </div>
          </main>
        </section>
      </Content>
    </Container>
  );
};

export default SubFooter;
