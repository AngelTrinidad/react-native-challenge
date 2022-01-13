import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStackScreen } from "../types";
import AccountScreen from "../../screens/AccountScreen";
import PartnerScreen from "../../screens/PartnersScreen";
import { TabbarLabel } from "../../components/ui";
import { useThemeContext } from "../../contexts/ThemeContext";

const Tab = createBottomTabNavigator();

/**
 * Array of tabs
 */
const tabs = [
  {
    name: AuthStackScreen.Account,
    component: AccountScreen,
    options: {
      tabBarLabel: (props: any) => <TabbarLabel label="Account" {...props} />,
    },
  },
  {
    name: AuthStackScreen.Partners,
    component: PartnerScreen,
    options: {
      tabBarLabel: (props: any) => <TabbarLabel label="Partners" {...props} />,
    },
  },
];

/**
 * Wallet Tabs component
 */
const WalletTabs: React.FC = () => {
  const { colors } = useThemeContext();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "#0A132C",
        tabStyle: {
          padding: 0,
          margin: 0,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen key={tab.name} {...tab} />
      ))}
    </Tab.Navigator>
  );
};

export default React.memo(WalletTabs);
