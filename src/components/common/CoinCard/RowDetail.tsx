import React from "react";
import { View, StyleSheet } from "react-native";
import Currency from "./Currency";
import { Text } from "../../ui";
import { TCurrency } from "../../../types";
import { CURRENCY_SYMBOLS } from "../../../utils/constants";

type Props = {
  label: string;
  value: string;
  currency?: TCurrency;
};

const RowDetail: React.FC<Props> = ({ label, value, currency }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {!!currency && CURRENCY_SYMBOLS[currency]}
        {value}
      </Text>
      {!!currency && <Currency value={currency} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginRight: 8,
  },
  value: {
    fontSize: 16,
  },
  currency: {
    fontWeight: "500",
    color: "#6B7280",
  },
});

export default React.memo(RowDetail);
