import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WalletTabs from "./WalletTabs";
import ListScreen from "../../screens/ListScreen";
import DetailScreen from "../../screens/DetailScreen";
import { AuthStackScreen } from "../types";
import BackButton from "../../components/ui/BackButton";
import LogoutButton from "../../components/ui/LogoutButton";
import { useUserContextUpdater } from "../../contexts/UserContext";
import { useThemeContext } from "../../contexts/ThemeContext";

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  const { signout } = useUserContextUpdater();
  const { colors } = useThemeContext();

  const headerBackTitleStyle = {
    fontSize: 14,
    color: colors.primary,
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleStyle,
        headerBackImage: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name={AuthStackScreen.List}
        component={ListScreen}
        options={{
          headerRight: () => <LogoutButton onPress={signout} />,
        }}
      />
      <Stack.Screen name={AuthStackScreen.Detail} component={DetailScreen} />
      <Stack.Screen name={AuthStackScreen.Wallet} component={WalletTabs} />
    </Stack.Navigator>
  );
};

export default React.memo(AuthStack);
