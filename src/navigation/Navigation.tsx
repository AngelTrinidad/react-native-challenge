import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DefaultStack from "./stacks/PublicStack";
import AuthStack from "./stacks/AuthStack";
import { useUserContextState } from "../contexts/UserContext";

const Navigation = () => {
  const user = useUserContextState();

  return (
    <NavigationContainer>
      {!!user ? <AuthStack /> : <DefaultStack />}
    </NavigationContainer>
  );
};

export default React.memo(Navigation);
