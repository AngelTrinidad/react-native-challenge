import React from "react";
import { User } from "../models";

type ProviderProps = {
  children?: React.ReactNode;
};

type TUserContextUpdater = {
  userHandler: (newValue: User) => void;
  signout: () => void;
};

const UserContextState = React.createContext<User | null>(null);

const UserContextUpdater = React.createContext<TUserContextUpdater>({
  userHandler: () => null,
  signout: () => null,
});

const useUserContextState = () => {
  const context = React.useContext(UserContextState);

  if (context === undefined)
    throw new Error("useUserContextState was used without its Provider");

  return context;
};

const useUserContextUpdater = () => {
  const context = React.useContext(UserContextUpdater);

  if (context === undefined)
    throw new Error("useUserContextUpdater was used outside of its Provider");

  return context;
};

const UserContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);

  const userHandler = React.useCallback((newValue: User) => {
    setUser(newValue);
  }, []);

  const signout = React.useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContextState.Provider value={user}>
      <UserContextUpdater.Provider value={{ userHandler, signout }}>
        {children}
      </UserContextUpdater.Provider>
    </UserContextState.Provider>
  );
};

export { useUserContextState, useUserContextUpdater, UserContextProvider };
