import { createContext, useEffect, useState } from 'react';

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  //   const [dark, setDark] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeModeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeModeContext.Provider>;
}

export { ThemeModeContext, ThemeModeProvider };
