import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 1024px) {
    /* max-width: 480px; */
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 15%;
  min-height: 61px;

  .action {
    display: none;
    font-size: 17px;
    text-decoration: none;
    color: var(--color-quaternary);
    cursor: pointer;
    transition: filter 0.6s ease !important;
    &:hover {
      text-decoration: underline;
      transition: filter 0.6s ease !important;
      filter: brightness(1.2);
    }
  }

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    .action {
      display: block;
      margin-right: 25px;
    }

    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;

export const Form = styled.form`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;

  padding: 0 32px;
  max-width: 422px;
  margin: 0 auto;

  > .title {
    font-size: 25px;
    line-height: 1.14286;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  .change-form {
    font-size: 12px;
    text-decoration: none;
    color: var(--color-blue);
    cursor: pointer;
    transition: filter 0.6s ease !important;
    &:hover {
      text-decoration: underline;
      transition: filter 0.6s ease !important;
      filter: brightness(1.2);
    }
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;

    margin-top: 18px;
  }

  > button {
    background-color: var(--color-blue);

    padding: 13px 18px;
    font-size: 16px;
    color: var(--color-tertiary);
    border: none;

    cursor: pointer;
    &:hover {
      opacity: 0.87;
    }
  }

  > .checkbox-label {
    margin: 20px 0;
    font-size: 14px;
    display: flex;
    align-items: center;

    img {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    span {
      margin-left: 10px;
    }
  }

  > .google-button {
    background-color: transparent !important;
    border: 1px solid #d0d2d3 !important;
    color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;

    padding: 13px 18px;
    font-size: 16px;
    transition: 0.6s ease !important;
    outline: none;

    cursor: pointer;
    &:hover {
      opacity: 0.87;
      transition: 0.6s ease !important;
      outline: none;
    }

    > svg {
      margin-top: -2px;
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }

  > .terms {
    font-size: 12px;
    line-height: 18px;
    opacity: 0.6;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: var(--color-blue);
    &:hover {
      text-decoration: underline;
    }
  }
`;
