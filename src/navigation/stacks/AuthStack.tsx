import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WalletTabs from "./WalletTabs";
import ListScreen from "../../screens/ListScreen";
import DetailScreen from "../../screens/DetailScreen";
import { AuthStackScreen } from "../types";
import { NAVIGATOR_STYLES } from "../../styles";
import BackButton from "../../components/ui/BackButton";
import LogoutButton from "../../components/ui/LogoutButton";

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleStyle: NAVIGATOR_STYLES.headerBackTitle,
        headerBackImage: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name={AuthStackScreen.List}
        component={ListScreen}
        options={{
          headerRight: () => <LogoutButton />,
        }}
      />
      <Stack.Screen name={AuthStackScreen.Detail} component={DetailScreen} />
      <Stack.Screen name={AuthStackScreen.Wallet} component={WalletTabs} />
    </Stack.Navigator>
  );
};

export default React.memo(AuthStack);
