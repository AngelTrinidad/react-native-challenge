import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SHADOW_STYLES } from "../../styles";

type Props = TextInputProps & {
  styleContainer?: ViewStyle;
};

const TextInput: React.FC<Props> = ({ style, styleContainer, ...rest }) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <NativeTextInput
        style={[styles.textInput, style]}
        placeholderTextColor="#6B7280"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 42,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    ...SHADOW_STYLES,
  },
  textInput: {
    flex: 1,
    width: "100%",
    fontSize: 16,
  },
});

export default React.memo(TextInput);
