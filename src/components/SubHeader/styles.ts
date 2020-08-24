import styled from 'styled-components';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  --bg-color: var(--color-primary);
  --text-color: var(--color-tertiary);
  --logo-color: var(--color-secondary);

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

export const Content = styled.div`
  z-index: 3;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);

  > h2 {
    color: var(--logo-color);
    font-size: 60px;
    line-height: 78px;
    letter-spacing: -1px;
    margin-top: 15px;
    max-width: var(--content-width);
  }
  > p {
    margin-top: 40px;
    font-size: 19px;
    line-height: 31px;
    color: var(--text-color);
    max-width: 70%;
    max-width: var(--content-width);
  }

  > h4 {
    font-size: 25px;
    line-height: 32px;
    color: var(--logo-color);
    font-weight: 600;
  }

  .subheader-link {
    margin-top: 50px;
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 13px 50px;
    font-size: 16px;
    line-height: 26px;
    text-decoration: none;
    font-weight: 500;
    max-width: max-content;
    display: block;
    cursor: pointer;
    transition: filter 0.6s ease !important;
    outline: none;

    &:hover {
      transition: filter 0.6s ease !important;
      filter: brightness(1.2);
      outline: none;
    }
  }

  @keyframes bounceAlphaDown {
    0% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
    25% {
      opacity: 0;
      transform: translateY(20px) scale(0.9);
    }
    26% {
      opacity: 0;
      transform: translateY(-20px) scale(0.9);
    }
    55% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  > .arrow-down {
    margin-top: 30px;
    > svg {
      margin-left: 10px;
      animation-name: bounceAlphaDown;
      animation-duration: 2.4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      cursor: pointer;
      transition: filter 0.6s ease !important;
      outline: none;

      &:hover {
        transition: filter 0.6s ease !important;
        filter: brightness(1.2);
        outline: none;
      }
    }
  }

  > .hero-image {
    position: relative;
    max-width: var(--content-width);
    margin-top: -25px;

    > img {
      z-index: -1;
      position: absolute;
      width: 100%;
      max-width: 720px;
      visibility: hidden;
    }
  }

  @media (min-width: 468px) {
    > h2 {
      font-size: 78px;
      line-height: 88px;
    }
  }

  @media (min-width: 780px) {
    > .hero-image {
      > img {
        width: auto;
      }
    }
  }

  @media (min-width: 1024px) {
    .subheader-link {
      display: none;
    }
  }
`;
