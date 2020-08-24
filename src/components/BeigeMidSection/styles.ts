import styled from 'styled-components';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;
  --bg-color: var(--color-secondary);
  --text-color: var(--color-quaternary);
  --logo-color: var(--color-primary);

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
  background: var(--bg-color);
  position: relative;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  display: block;

  padding: var(--padding-top) 32px var(--padding-bottom);

  h2 {
    font-size: 42px;
    line-height: 48px;
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    line-height: 26px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  > .hero-image {
    position: relative;
    max-width: var(--content-width);
    margin-top: -220px;
    z-index: -1;
    width: 100%;
    /* visibility: hidden; */

    > img {
      width: 100%;
      z-index: -1;
    }
  }

  > .text-content {
    margin-left: 0px;
    margin-top: 30px;
  }

  @media (min-width: 803px) {
    > .text-content {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

    > .hero-image {
      > img {
        max-width: 720px;
      }
    }

    > .text-content {
      margin-left: 30px;
      margin-top: 0px;
    }
  }
`;
