import React from "react";
import { ViewProps } from "react-native";
import ViewFlex from "./ViewFlex";
import { DEFAULT_PADDING_HORIZONTAL } from "../../styles";

type Props = ViewProps & {
  backgroundColor?: string;
  children?: React.ReactNode;
  withPadding?: boolean;
};

const ViewContainer: React.FC<Props> = ({
  children,
  style,
  withPadding = true,
  backgroundColor = "white",
  ...rest
}) => {
  const containerStyle = {
    backgroundColor,
    paddingHorizontal: withPadding ? DEFAULT_PADDING_HORIZONTAL : 0,
  };

  return (
    <ViewFlex style={[containerStyle, style]} {...rest}>
      {children}
    </ViewFlex>
  );
};

export default React.memo(ViewContainer);
