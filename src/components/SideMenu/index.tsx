import React, { useState, useEffect } from 'react';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 500;

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      if (window.innerWidth >= 1024) setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  const classes = [isActive ? 'open' : '', scrollY <= scrollThreshold ? 'scrollOpen' : ''];
  const className = classes.join(' ').trim();

  function toggleActiveMenu() {
    setIsActive(prev => !prev);
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
