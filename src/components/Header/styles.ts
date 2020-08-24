import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;

export const HeaderContent = styled.header`
  z-index: 4;
  background: var(--bg-color);

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;
