import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { DEFAULT_PADDING_HORIZONTAL } from "../../styles";
import ViewFlex from "./ViewFlex";

type Props = {
  style?: ViewStyle;
  children?: React.ReactNode;
};

const BEHAIVOR = Platform.OS === "ios" ? "padding" : "height";

const KeyboardAvoidingContainer: React.FC<Props> = ({ style, children }) => {
  return (
    <KeyboardAvoidingView behavior={BEHAIVOR} style={styles.container}>
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <ViewFlex style={style}>{children}</ViewFlex>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
  },
});

export default React.memo(KeyboardAvoidingContainer);
