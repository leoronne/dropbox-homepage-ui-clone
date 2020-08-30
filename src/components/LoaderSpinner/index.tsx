import React from 'react';
import { ClipLoader } from 'react-spinners';

import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container className="loader-container">
      <ClipLoader
        css={`
          display: block;
          margin: 0 auto;
        `}
        size={18}
        color="#0d2f81"
      />
    </Container>
  );
};
export default Loader;
