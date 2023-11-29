'use client';

import React, { createContext, useState, useContext } from 'react';
import themes from './themes';

export const GlobalContext = createContext();
export const GlobalUPdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider 
      value={{
        theme,
      }}
      
    >
      <GlobalUPdateContext.Provider value={{}}>
        {children}
      </GlobalUPdateContext.Provider>
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalContext);