import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as GoogleIcon } from '~/assets/svg/google.svg';
import { ReactComponent as AppleIcon } from '~/assets/svg/apple.svg';

import checkedImg from '~/assets/img/checked.png';
import uncheck from '~/assets/img/uncheck.png';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [formActive, setFormActive] = useState(true); // true - register / false - login
  const { t } = useTranslation();
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        {/* ✕ chacter in video description */}
        <p className="action" onClick={() => setFormActive(!formActive)}>
          {formActive ? t('widget-signin') : t('widget-signup-button-2')}
        </p>
        <a className="action" href="https://www.dropbox.com/install" target="_blank" rel="noopener noreferrer">
          {t('download')}
        </a>
        <button type="button" className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form>
        {formActive ? (
          <>
            <span className="title">{t('widget-signup')}</span>
            <span className="subtitle">
              {`${t('or')} `}
              <span className="change-form" onClick={() => setFormActive(!formActive)}>
                {`${t('widget-signup-title-1')} `}
              </span>
            </span>

            <input type="text" placeholder={t('widget-signup-title-2')} />
            <input type="text" placeholder={t('widget-signup-title-3')} />
            <input type="email" placeholder={t('widget-signup-title-4')} />
            <input type="password" placeholder={t('widget-signup-title-5')} />

            <div className="checkbox-label">
              <img src={checked ? checkedImg : uncheck} onClick={() => setChecked(!checked)} alt={t('widget-signup-title-7')} />
              <span>
                {`${t('widget-signup-title-6')} `}
                <a href="https://www.dropbox.com/terms" target="_blank" rel="noopener noreferrer">
                  {t('widget-signup-title-7')}
                </a>
              </span>
            </div>

            <button type="button" className="enter-button">
              {t('widget-signup-button-1')}
            </button>

            <span className="google-button">
              <GoogleIcon />
              {`${t('widget-signup-button-2')} ${t('widget-signup-title-8')}`}
            </span>
          </>
        ) : (
          <>
            <span className="title">{t('widget-signin-title-1')}</span>
            <span className="subtitle">
              {`${t('widget-signin-title-2')} `}
              <span className="change-form" onClick={() => setFormActive(!formActive)}>
                {`${t('widget-signin-title-3')} `}
              </span>
            </span>

            <input type="email" placeholder={t('widget-signup-title-4')} />
            <input type="password" placeholder={t('widget-signup-title-5')} />

            <div className="checkbox-label">
              <img src={checked ? checkedImg : uncheck} onClick={() => setChecked(!checked)} alt={t('widget-signup-title-7')} />
              <span>{`${t('widget-signin-title-4')}`}</span>
            </div>

            <a href="https://www.dropbox.com/forgot?email_from_login=" target="_blank" rel="noopener noreferrer" className="change-form">
              {t('widget-signin-title-5')}
            </a>

            <br />

            <button type="button" className="enter-button">
              {t('widget-signin')}
            </button>

            <span className="google-button">
              <GoogleIcon />
              {`${t('widget-signin-title-6')}`}
            </span>

            <span className="google-button">
              <AppleIcon />
              {`${t('widget-signin-title-7')}`}
            </span>
          </>
        )}

        <span className="terms">
          {`${t('widget-signup-title-9')} `}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            {t('widget-signup-privacy')}
          </a>
          {t('and')}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            {t('widget-signup-service-terms')}
          </a>
          {`${t('widget-signup-of-google')}.`}
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
