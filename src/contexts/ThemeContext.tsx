import React from "react";

type Theme = {
  colors: {
    primary: string;
    containerBackground: string;
    grey: string;
    lightGrey: string;
  };
};

const DEFAULT_THEME: Theme = {
  colors: {
    primary: "#1FC4DB",
    containerBackground: "white",
    grey: "#6B7280",
    lightGrey: "#F8F8FA",
  },
};

const ThemeContext = React.createContext<Theme>(DEFAULT_THEME);

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useThemeContext was used without its Provider");

  return context;
};

const ThemeContextProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={DEFAULT_THEME}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeContextProvider };
