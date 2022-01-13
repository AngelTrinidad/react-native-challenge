import React from "react";
import { View, StyleSheet } from "react-native";
import { useThemeContext } from "../../contexts/ThemeContext";
import Text from "./Text";

type Props = {
  color: string;
  focused: boolean;
  label: string;
};

const TabbarLabel: React.FC<Props> = ({ color, focused, label }) => {
  const { colors } = useThemeContext();
  return (
    <View
      style={[
        styles.container,
        { borderTopColor: focused ? colors.primary : "white" },
      ]}
    >
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 3,
    flex: 1,
    paddingTop: 16,
    minWidth: 138,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default React.memo(TabbarLabel);
