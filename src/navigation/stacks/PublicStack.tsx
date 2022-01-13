import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PublicStackScreen } from "../types";
import { NAVIGATOR_STYLES } from "../../styles";
import { Logo } from "../../components/ui";
import HomeScreen from "../../screens/HomeScreen";
import ToDoScreen from "../../screens/ToDoScreen";
import BackButton from "../../components/ui/BackButton";

const Stack = createStackNavigator();

const PublicStack: React.FC = () => {
  const LogoTitle = React.useCallback((props: any): React.ReactNode => <Logo {...props} />,[]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleStyle: NAVIGATOR_STYLES.headerBackTitle,
        headerBackImage: () => <BackButton />,
      }}
    >
      <Stack.Screen name={PublicStackScreen.ToDo} component={ToDoScreen} />
      <Stack.Screen
        name={PublicStackScreen.Home}
        component={HomeScreen}
        options={{ headerTitle: LogoTitle }}
      />
    </Stack.Navigator>
  );
};

export default React.memo(PublicStack);
