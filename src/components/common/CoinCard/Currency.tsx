import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { TCurrency } from "../../../types";
import { Text } from "../../ui";

type Props = {
  value?: TCurrency;
  style?: TextStyle;
};

const Currency: React.FC<Props> = ({ style, value = "USD" }) => (
  <Text style={[styles.currency, style]}>{value}</Text>
);

const styles = StyleSheet.create({
  currency: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6,
  },
});

export default React.memo(Currency);
