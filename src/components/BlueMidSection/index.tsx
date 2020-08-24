import React from 'react';
// import { useTranslation } from 'react-i18next';

import Header from '../Header';

import { Container, Content } from './styles';

const BlueMidSection: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <Container>
      <Header />

      <Content>
        <h2>Armazenamento e compartilhamento de arquivos são só o começo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Content>
    </Container>
  );
};

export default BlueMidSection;
