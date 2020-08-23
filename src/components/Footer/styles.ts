import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  --bg-color: var(--color-quaternary);
  --text-color: var(--color-tertiary);
  --logo-color: var(--color-blue);

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }

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
  padding: 0 32px;

  .footer__group-list,
  .footer__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer__group-list {
    padding: 100px 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
  }

  .footer__group-list-item {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    padding-bottom: 44px;

    > h2 {
      font-size: 22px;
      font-weight: 500;
      color: inherit;
      margin: 0;
      color: var(--text-color);
    }

    > .footer__link-list {
      margin-top: 14px;
    }
  }

  h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  a {
    font-size: 15px;
    font-weight: 400;
    color: var(--text-color);
    display: inline-block;
    text-decoration: none;
    background: none;
    padding-bottom: 6px;
    padding-top: 6px;
    padding-left: 0;
    transition: 0.6s ease !important;

    &:hover {
      text-decoration: underline;
      transition: 0.6s ease !important;
    }
  }

  @media only screen and (min-width: 736px) {
    .footer__group-list-item {
      -webkit-box-flex: 0;
      flex: 0 0 20%;
      max-width: 20%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .footer__group-list {
      padding: 160px 0 120px 0;
      width: 100%;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
    .footer__group-list-item {
      margin-left: 0;
      padding-bottom: 0;
      -webkit-box-flex: 1;
      flex: 1;
      max-width: none;
    }
  }
`;

export const BottomFooter = styled.div`
  min-height: 130px;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0 0 50px 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  width: 83.33333%;
  height: auto;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-color);

  div,
  select {
    border: 0;
    outline: 0;
    background: transparent;
    color: #767676;
    font-size: 15px;
    font-weight: 500;
    width: min-content;
    cursor: pointer;
    transition: color 0.6s ease !important;
    display: flex;
    align-items: center;

    svg {
      height: 16px;
      width: 16px;
    }

    span {
      margin-top: 5px;
      margin-left: 10px;
    }

    option {
      border: 0;
      outline: 0;
      background-color: transparent;
      color: #767676;
      font-weight: 500;
    }

    &:hover {
      text-decoration: underline;
      color: var(--text-color);
      transition: color 0.6s ease !important;
    }
  }

  .MuiInput-underline:after {
    border-bottom: transparent !important;
  }

  .footer__border {
    border-bottom: 1px solid var(--text-color);
    margin-bottom: 20px;
    width: 100%;
  }

  @media only screen and (min-width: 375px) {
    margin: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;

    .footer__border {
      margin-bottom: 50px;
      width: 120px;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin: auto;
    width: 100%;
  }
`;
