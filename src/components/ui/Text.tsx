/**
 * Wrapper Text component
 *
 * Usefull to defined any kind of global property and apply globally in the project
 * For example: default styles, like font family, font size, others...
 */

import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

export type WrapperTextProps = TextProps & {
  children: React.ReactNode;
  align?: "left" | "right" | "center" | "auto" | "justify";
};

const WrapperText: React.FC<WrapperTextProps> = ({
  align,
  children,
  style,
  ...rest
}) => {
  const textStyles: StyleProp<TextStyle> = [
    styles.text,
    { textAlign: align },
    style,
  ];

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default React.memo(WrapperText);
