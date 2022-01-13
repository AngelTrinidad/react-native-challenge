import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DefaultStack from "./stacks/PublicStack";
import AuthStack from "./stacks/AuthStack";

const Navigation = () => {
  // TODO: get authenticated context
  const isLogged: boolean = true;

  return (
    <NavigationContainer>
      {isLogged ? <AuthStack /> : <DefaultStack />}
    </NavigationContainer>
  );
};

export default React.memo(Navigation);
