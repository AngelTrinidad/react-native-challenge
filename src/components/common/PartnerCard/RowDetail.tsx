import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  value: string;
};

const RowDetail: React.FC<Props> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 8
  },
  label: {
    width: 52,
    fontWeight: "500"
  },
  value: {
    flex: 1,
    color: "#6B7280",
  },
});

export default React.memo(RowDetail);
