import React, {useEffect, useMemo, useState} from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children, defaultTheme}) => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme.colors);

  const customeTheme = colors => {
    setActiveTheme({...activeTheme,...colors});
  };

  const theme = useMemo(() => {
    return {
      colors: activeTheme,
      typography:defaultTheme.typography,
      customeTheme,
    };
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
