import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    cardBackground: '#f8f9fa',
    borderColor: '#e0e0e0',
    buttonBackground: '#007AFF',
    buttonText: '#ffffff',
    tabBarBackground: '#ffffff',
    tabBarBorder: '#e0e0e0',
  };

  const darkTheme = {
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    cardBackground: '#2d2d2d',
    borderColor: '#404040',
    buttonBackground: '#0A84FF',
    buttonText: '#ffffff',
    tabBarBackground: '#1a1a1a',
    tabBarBorder: '#404040',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

