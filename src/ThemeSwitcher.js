// src/ThemeSwitcher.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-box">
      <p>Tema atual: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
};

export default ThemeSwitcher;
