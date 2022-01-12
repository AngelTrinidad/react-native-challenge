import React from "react";
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { THEME } from "../../styles";
import Text from "./Text";

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<Props> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 344,
    minHeight: 42,
    backgroundColor: THEME.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});

export default React.memo(Button);
