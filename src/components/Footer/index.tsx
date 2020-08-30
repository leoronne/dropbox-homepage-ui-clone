import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { useLanguage } from '../../hooks/useLanguage';

import Header from '../Header';

import { ReactComponent as BrazilIcon } from '~/assets/svg/brazil.svg';
import { ReactComponent as FranceIcon } from '~/assets/svg/france.svg';
import { ReactComponent as SpainIcon } from '~/assets/svg/spain.svg';
import { ReactComponent as USAIcon } from '~/assets/svg/usa.svg';

import { Container, Content, BottomFooter } from './styles';

interface LinksHref {
  [key: string]: string;
}

const useStyles = makeStyles({
  select: {
    borderRadius: '5px',
    '& ul': {
      backgroundColor: '#3c3c3c',
      color: '#fff',
    },
    '& li': {
      fontSize: 13,
      '&:hover': {
        backgroundColor: '#787777',
      },
    },
  },
});

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { language, changeLanguage } = useLanguage();
  const titles = [t('footer-col-1-title'), t('footer-col-2-title'), t('footer-col-3-title'), t('footer-col-4-title'), t('footer-col-5-title')];
  const linksHref: LinksHref = {
    'footer-col-1-link-1': 'https://dropbox.com/install',
    'footer-col-1-link-2': 'https://dropbox.com/mobile',
    'footer-col-1-link-3': 'https://dropbox.com/plans?trigger=homepagefoot',
    'footer-col-1-link-4': 'https://dropbox.com/security',
    'footer-col-1-link-5': 'https://dropbox.com/features?trigger=footer',

    'footer-col-2-link-1': 'https://dropbox.com/plus?trigger=foot_global',
    'footer-col-2-link-2': 'https://dropbox.com/pro?trigger=foot_global',
    'footer-col-2-link-3': 'https://dropbox.com/business',
    'footer-col-2-link-4': 'https://dropbox.com/enterprise',

    'footer-col-3-link-1': 'https://dropbox.com/about',
    'footer-col-3-link-2': 'https://bit.ly/dbxdotcomapps',
    'footer-col-3-link-3': 'https://dropbox.com/news',
    'footer-col-3-link-4': 'https://investors.dropbox.com/',
    'footer-col-3-link-5': 'https://blogs.dropbox.com/dropbox',

    'footer-col-4-link-1': 'https://dropbox.com/help',
    'footer-col-4-link-2': 'https://dropbox.com/contact',
    'footer-col-4-link-3': 'https://dropbox.com/terms/cookies',
    'footer-col-4-link-4': 'https://dropbox.com/privacy',
    'footer-col-4-link-5': 'https://dropbox.com/sitemap',

    'footer-col-5-link-1': 'https://dropbox.com/developers',
    'footer-col-5-link-2': 'https://dropbox.com/referrals',
    'footer-col-5-link-3': 'https://www.dropboxforum.com',
  };

  return (
    <Container>
      <Header />
      <Content>
        <ul className="footer__group-list">
          {titles.map((title, index) => {
            const linksTitle = Object.keys(linksHref);
            const linksList = linksTitle.filter(link => link.includes(`col-${index + 1}`));
            return (
              <li className="footer__group-list-item" key={title}>
                <h2>{title}</h2>
                <ul className="footer__link-list">
                  {linksList.map(link => (
                    <li className="footer__link-list-item" key={link}>
                      <a href={linksHref[link]} target="_blank" rel="noopener noreferrer">
                        {t(link)}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <BottomFooter>
          <span className="footer__border" />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            onChange={e => changeLanguage(String(e.target.value))}
            MenuProps={{ classes: { paper: classes.select } }}
          >
            <MenuItem value="en">
              <USAIcon />
              <span>English (United States)</span>
            </MenuItem>
            <MenuItem value="es">
              <SpainIcon />
              <span>Español (Latinoamérica)</span>
            </MenuItem>
            <MenuItem value="fr">
              <FranceIcon />
              <span>Français</span>
            </MenuItem>
            <MenuItem value="pt">
              <BrazilIcon />
              <span>Português (Brasil)</span>
            </MenuItem>
          </Select>
          <p>
            {`© ${new Date().getFullYear()}. ${t('designed')}  `}
            <a href="http://github.com/leoronne" target="_blank" rel="noopener noreferrer">
              Leonardo Ronne
            </a>
          </p>
        </BottomFooter>
      </Content>
    </Container>
  );
};

export default Footer;
