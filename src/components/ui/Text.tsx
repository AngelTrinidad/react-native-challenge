import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle,
} from "react-native";

export type TextProps = NativeTextProps & {
  children: React.ReactNode;
  align?: "left" | "right" | "center" | "auto" | "justify";
};

const Text: React.FC<TextProps> = ({
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
    <NativeText style={textStyles} {...rest}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#0A132C"
  },
});

export default React.memo(Text);
