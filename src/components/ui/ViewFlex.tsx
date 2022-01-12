import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

type Props = ViewProps & {
  children?: React.ReactNode;
};

const ViewFlex: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.viewFlex, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlex: {
    flex: 1,
  },
});

export default React.memo(ViewFlex);
