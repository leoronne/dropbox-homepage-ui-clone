import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  --bg-color: var(--color-tertiary);
  --text-color: var(--color-quaternary);
  --logo-color: var(--color-blue);

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }

  display: flex;
  align-items: center;
  min-height: 503px;
  background: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  z-index: 3;
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

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px;

  > section {
    margin: auto;
    width: 80%;

    h3 {
      font-size: 30px;
      line-height: 32px;
      font-weight: 500;
    }

    h1 {
      font-size: 45px;
      line-height: 46px;
      font-weight: 600;
      margin-bottom: 50px;
    }

    > main {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 40px;

      > .col {
        > .subfooter-link {
          background-color: var(--color-blue);
          color: var(--bg-color);
          padding: 13px 50px;
          font-size: 16px;
          line-height: 26px;
          text-decoration: none;
          font-weight: 500;
        }
      }
    }
  }

  @media (min-width: 801px) {
    padding: 120px 20px;
  }

  @media (min-width: 1024px) {
    > section {
      > main {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
        > .col {
          width: 80%;
        }
      }
    }
  }
`;
