import React from "react";
import { StatusBar } from "expo-status-bar";
import { UserContextProvider } from "./src/contexts/UserContext";
import Navigation from "./src/navigation/Navigation";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <StatusBar style="auto" />
        <Navigation />
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
