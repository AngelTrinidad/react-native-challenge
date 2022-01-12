import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { THEME } from "../../../styles";
import { TCurrency } from "../../../types";
import { Text } from "../../ui";
import Currency from "./Currency";

type Props = {
  amount: number | string;
  style?: ViewStyle;
  currency?: TCurrency;
};

const PriceText: React.FC<Props> = ({ amount, currency, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.amount}>{amount}</Text>
      <Currency style={styles.currency} value={currency} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  amount: {
    color: THEME.primaryColor,
    fontSize: 24,
    fontWeight: "600",
  },
  currency: {
    marginBottom: 3,
  },
});

export default React.memo(PriceText);
