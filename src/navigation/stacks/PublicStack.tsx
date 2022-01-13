import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PublicStackScreen } from "../types";
import { Logo } from "../../components/ui";
import HomeScreen from "../../screens/HomeScreen";
import ToDoScreen from "../../screens/ToDoScreen";
import BackButton from "../../components/ui/BackButton";
import { useThemeContext } from "../../contexts/ThemeContext";

const Stack = createStackNavigator();

const PublicStack: React.FC = () => {
  const { colors } = useThemeContext();

  const headerBackTitleStyle = {
    fontSize: 14,
    color: colors.primary,
  };

  const LogoTitle = React.useCallback(
    (props: any): React.ReactNode => <Logo {...props} />,
    []
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleStyle,
        headerBackImage: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name={PublicStackScreen.Home}
        component={HomeScreen}
        options={{ headerTitle: LogoTitle }}
      />
      <Stack.Screen name={PublicStackScreen.ToDo} component={ToDoScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(PublicStack);
