// src/App.js
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>🌗 Mini App de Tema (Light/Dark)</h1>
      <ThemeSwitcher />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
