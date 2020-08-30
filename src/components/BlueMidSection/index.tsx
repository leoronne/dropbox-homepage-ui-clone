import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import scrollInto from '../../utils/scrollInto';

import Header from '../Header';

import { Container, Content, SectionFooter, ImageSectionMobile, ImageSectionDesktop } from './styles';

const BlueMidSection: React.FC = () => {
  const { t } = useTranslation();
  const [visibleSection, setVisibleSection] = useState(0);

  const yOffset = -67; // header height

  useEffect(() => {
    const getPosition = (id: string) => {
      const element = document.getElementById(id);

      if (element)
        return {
          yPos: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
          height: element.clientHeight,
        };

      return {
        yPos: 0,
        height: 0,
      };
    };

    const handleScroll = () => {
      if (window.innerWidth >= 801) {
        const sectionRefs = [
          {
            section: 1,
            pos: getPosition('bluemidsection-img-1'),
          },
          {
            section: 2,
            pos: getPosition('bluemidsection-img-2'),
          },
          {
            section: 3,
            pos: getPosition('bluemidsection-img-3'),
          },
        ];

        const scrollPosition = window.scrollY + yOffset;

        // console.log('scrollPosition', scrollPosition);
        // console.log('sectionRefs', sectionRefs);
        // console.log('sectionRefs[1].pos.yPos - sectionRefs[1].pos.height / 2', sectionRefs[1].pos.yPos - sectionRefs[1].pos.height / 2);
        if (scrollPosition >= 0 && scrollPosition < sectionRefs[0].pos.yPos + sectionRefs[0].pos.height / 4) {
          setVisibleSection(1);
        } else if (scrollPosition >= sectionRefs[0].pos.yPos + sectionRefs[0].pos.height / 4 && scrollPosition < sectionRefs[1].pos.yPos + sectionRefs[1].pos.height / 4) {
          setVisibleSection(2);
        } else if (scrollPosition >= sectionRefs[1].pos.yPos + sectionRefs[1].pos.height / 4) {
          setVisibleSection(3);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection, yOffset]);

  return (
    <Container>
      <Header />

      <Content>
        <h2>{t('bluemidsection-title-1')}</h2>

        <ImageSectionMobile>
          <div className="section">
            <img src={t('bluemidsection-img-1')} alt={t('bluemidsection-title-2')} />
            <div className="image-description">
              <h3>{t('bluemidsection-title-2')}</h3>
              <p>{t('bluemidsection-title-3')}</p>
            </div>
          </div>
          <div className="section">
            <img src={t('bluemidsection-img-2')} alt={t('bluemidsection-title-4')} />
            <div className="image-description">
              <h3>{t('bluemidsection-title-4')}</h3>
              <p>{t('bluemidsection-title-5')}</p>
            </div>
          </div>
          <div className="section">
            <img src={t('bluemidsection-img-3')} alt={t('bluemidsection-title-6')} />
            <div className="image-description">
              <h3>{t('bluemidsection-title-6')}</h3>
              <p>{t('bluemidsection-title-7')}</p>
            </div>
          </div>
        </ImageSectionMobile>

        <ImageSectionDesktop>
          <div className="image-texts">
            <div className={`section${visibleSection === 1 ? ' active' : ''}`} onClick={() => scrollInto('bluemidsection-img-1')}>
              <h3>{t('bluemidsection-title-2')}</h3>
              <p>{t('bluemidsection-title-3')}</p>
            </div>
            <div className={`section${visibleSection === 2 ? ' active' : ''}`} onClick={() => scrollInto('bluemidsection-img-2')}>
              <h3>{t('bluemidsection-title-4')}</h3>
              <p>{t('bluemidsection-title-5')}</p>
            </div>
            <div className={`section${visibleSection === 3 ? ' active' : ''}`} onClick={() => scrollInto('bluemidsection-img-3')}>
              <h3>{t('bluemidsection-title-6')}</h3>
              <p>{t('bluemidsection-title-7')}</p>
            </div>
          </div>

          <div className="images">
            <img src={t('bluemidsection-img-1')} alt={t('bluemidsection-title-2')} id="bluemidsection-img-1" />
            <img src={t('bluemidsection-img-2')} alt={t('bluemidsection-title-4')} id="bluemidsection-img-2" />
            <img src={t('bluemidsection-img-3')} alt={t('bluemidsection-title-6')} id="bluemidsection-img-3" />
          </div>
        </ImageSectionDesktop>
        <SectionFooter>
          <h1>{t('bluemidsection-footer-title-1')}</h1>

          <a href="https://www.dropbox.com/features" target="_blank" rel="noopener noreferrer">
            {t('bluemidsection-footer-title-2')}
          </a>
        </SectionFooter>
      </Content>
    </Container>
  );
};

export default BlueMidSection;
