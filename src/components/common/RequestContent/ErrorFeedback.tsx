import React from "react";
import { StyleSheet } from "react-native";
import { ViewFlex, Text } from "../../ui";

type Props = {
  message?: string;
};

const ErrorFeedback: React.FC<Props> = ({
  message = "Ohh noo... Something wrong happened 💩",
}) => {
  return (
    <ViewFlex style={styles.container}>
      <Text>{message}</Text>
    </ViewFlex>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(ErrorFeedback);
