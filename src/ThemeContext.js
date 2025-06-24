import React, { createContext, useState, useContext } from 'react';

// 1. Criação do Context
const ThemeContext = createContext();

// 2. Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook customizado para consumir
export const useTheme = () => useContext(ThemeContext);
