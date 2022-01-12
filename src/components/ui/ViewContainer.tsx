import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import ViewFlex from "./ViewFlex";
import { DEFAULT_PADDING_HORIZONTAL } from "../../styles";

type Props = ViewProps & {
  backgroundColor?: string;
  children?: React.ReactNode;
};

const ViewContainer: React.FC<Props> = ({
  children,
  style,
  backgroundColor = "white",
  ...rest
}) => {
  return (
    <ViewFlex style={[styles.container, { backgroundColor }, style]} {...rest}>
      {children}
    </ViewFlex>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
  },
});

export default React.memo(ViewContainer);
