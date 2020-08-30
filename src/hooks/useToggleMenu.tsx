import React, { createContext, useState, useContext } from 'react';

interface ToggleMenuContextProps {
  handleToggle(): void;
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  formActive: boolean;
}

const ToggleMenuContext = createContext<ToggleMenuContextProps>({} as ToggleMenuContextProps);

const ToggleMenuProvider: React.FC = ({ children }) => {
  const [formActive, setFormActive] = useState(true); // true - register / false - login

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return <ToggleMenuContext.Provider value={{ setFormActive, formActive, handleToggle }}>{children}</ToggleMenuContext.Provider>;
};

function useToggleMenu() {
  const context = useContext(ToggleMenuContext);

  if (!context) {
    throw new Error('useToggleMenu must be used within an ToggleMenuProvider');
  }

  return context;
}

export { ToggleMenuProvider, useToggleMenu };
