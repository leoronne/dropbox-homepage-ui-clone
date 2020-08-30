import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

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
  align-items: center;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > .header-left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > h1 {
      display: flex;
      align-items: center;

      > span {
        color: var(--text-color);
        margin-left: 10px;
        font-size: 29px;
      }
    }
  }

  a {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    display: none;
    margin-left: 40px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  > .access-buttons {
    width: calc(480px + ((100vw - 1440px) / 4));
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > button + button {
      margin-left: 50px;
    }

    #signin-button {
      display: none;
    }

    > button {
      color: var(--text-color);
      background: none;
      border: none;
      outline: none;
      font-size: 16px;
      cursor: pointer;

      > p {
        display: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  @media only screen and (min-width: 390px) {
    > .access-buttons {
      #signin-button {
        display: inline;
      }
    }
  }

  @media (min-width: 1024px) {
    a {
      display: inline;
    }
    > .access-buttons {
      > button {
        > p {
          display: inline;
        }

        > svg {
          display: none;
        }
      }
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
  transition: 0.6s ease !important;
  cursor: pointer;

  &:hover {
    transition: filter 0.6s ease !important;
    filter: brightness(1.2);
  }
`;

export const MenuIcon = styled(AiOutlineMenu)`
  margin-top: 2px;
  width: 20px;
  height: 20px;
  fill: var(--logo-color);
`;
