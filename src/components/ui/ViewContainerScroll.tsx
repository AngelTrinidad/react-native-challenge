import React from "react";
import { ScrollView, ViewStyle } from "react-native";
import { StyleSheet, ViewProps } from "react-native";
import { DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_TOP } from "../../styles";
import ViewContainer from "./ViewContainer";

type Props = ViewProps & {
  backgroundColor?: string;
  children?: React.ReactNode;
  scrollViewStyle?: ViewStyle;
};

const ViewContainerScroll: React.FC<Props> = ({
  children,
  scrollViewStyle,
  backgroundColor,
  ...rest
}) => {
  return (
    <ViewContainer
      backgroundColor={backgroundColor}
      {...rest}
      withPadding={false}
    >
      <ScrollView style={[styles.scroll, scrollViewStyle]}>
        {children}
      </ScrollView>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
  },
});

export default React.memo(ViewContainerScroll);
