import React from "react";
import { ScrollView, ViewStyle } from "react-native";
import { StyleSheet, ViewProps } from "react-native";
import ViewContainer from "./ViewContainer";

type Props = ViewProps & {
  backgroundColor?: string;
  children?: React.ReactNode;
  scrollViewStyle?: ViewStyle;
};

const ViewContainerScroll: React.FC<Props> = ({
  children,
  style,
  scrollViewStyle,
  backgroundColor,
  ...rest
}) => {
  return (
    <ViewContainer backgroundColor={backgroundColor} {...rest}>
      <ScrollView style={[styles.scroll, scrollViewStyle]}>
        {children}
      </ScrollView>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingTop: 24
  },
});

export default React.memo(ViewContainerScroll);
