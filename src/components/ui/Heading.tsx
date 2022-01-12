import React from "react";
import { StyleSheet } from "react-native";
import Text, { TextProps } from "./Text";

const Heading: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text style={styles.heading} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default React.memo(Heading);
