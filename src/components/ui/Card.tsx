import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { SHADOW_STYLES } from "../../styles";

type Props = ViewProps & {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    ...SHADOW_STYLES
  },
});

export default React.memo(Card);
