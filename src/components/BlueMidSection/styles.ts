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
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  padding: var(--padding-top) 32px var(--padding-bottom);

  > h2 {
    font-size: 40px;
    color: var(--logo-color);
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  @media (min-width: 801px) {
    > h2 {
      max-width: 50%;
    }
  }
`;

export const ImageSectionMobile = styled.div`
  > .section {
    > img {
      margin-top: 50px;
      max-width: 100%;
    }

    > .image-description {
      padding: 20px;
      > h3 {
        margin-bottom: 20px;
        color: var(--text-color);
        font-size: 25px;
        line-height: 32px;
        font-weight: 500;
      }

      > p {
        color: var(--text-color);
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
  @media (min-width: 801px) {
    display: none;
  }
`;

export const ImageSectionDesktop = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  > .image-texts {
    position: -webkit-sticky;
    position: sticky;
    top: 225.5px;
    justify-content: center;

    > .section {
      margin-top: 50px;
      cursor: pointer;
      -webkit-transition: opacity 0.6s ease-out;
      transition: opacity 0.6s ease-out;
      opacity: 0.5;
      border-left: solid 3px transparent;
      padding-left: 10px;

      &.active {
        opacity: 1;
        border-left: solid 3px var(--logo-color);
        transition: opacity 0.6s ease-out;
        -webkit-transition: opacity 0.6s ease-out;
      }

      &:hover {
        opacity: 1;
        transition: opacity 0.6s ease-out;
        -webkit-transition: opacity 0.6s ease-out;
      }
      > h3 {
        margin-bottom: 20px;
        color: var(--text-color);
        font-size: 27px;
        line-height: 34px;
        font-weight: 500;
      }

      > p {
        color: var(--text-color);
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  > .images {
    justify-content: center;
    text-align: right;
    > img {
      max-width: 100%;
    }
  }
  @media (max-width: 801px) {
    display: none;
  }
`;

export const SectionFooter = styled.div`
  padding: 120px 10% 0px 10%;
  margin: auto;
  border-top: 1px solid var(--text-color);
  margin-top: 50px;

  > h1 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    margin-bottom: 50px;
  }

  > a {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 13px 30px;
    font-size: 16px;
    line-height: 26px;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
  }

  @media (min-width: 801px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
    > h1 {
      max-width: 50%;
      margin-bottom: 0px;
    }
  }
`;
