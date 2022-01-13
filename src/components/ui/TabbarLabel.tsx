import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { THEME } from "../../styles";

type Props = {
  color: string;
  focused: boolean;
  label: string;
};

const TabbarLabel: React.FC<Props> = ({ color, focused, label }) => {
  return (
    <View
      style={[
        styles.container,
        { borderTopColor: focused ? THEME.primaryColor : "white" },
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
