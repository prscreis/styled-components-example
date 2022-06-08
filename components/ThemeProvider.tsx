import { createContext, useState, useContext } from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => {},
});

const lightTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#00a300',
    background: '#ffffff',
    backgroundInverse: '#000000',
  },
};

const darkTheme = {
  colors: {
    primary: '#ffff00',
    secondary: '#ffffff',
    background: '#000000',
    backgroundInverse: '#ffffff',
  },
};

export function useToggleTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useToggleTheme must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { toggleTheme };
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderSC theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProviderSC>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
