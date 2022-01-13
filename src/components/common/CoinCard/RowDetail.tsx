import React from "react";
import { View, StyleSheet } from "react-native";
import Currency from "./Currency";
import { Text } from "../../ui";
import { TCurrency } from "../../../types";
import { CURRENCY_SYMBOLS } from "../../../utils/constants";
import { formatNumber, roundNumber } from "../../../utils/helpers";

type Props = {
  label: string;
  value: number | null;
  currency?: TCurrency;
};

const RowDetail: React.FC<Props> = ({ label, value, currency }) => {
  const valueFormatted = React.useMemo(
    () => (value ? formatNumber(roundNumber(value)) : "-"),
    [value]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value} adjustsFontSizeToFit numberOfLines={1}>
        {!!currency && CURRENCY_SYMBOLS[currency]}
        {valueFormatted}
      </Text>
      {!!currency && <Currency value={currency} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    flex: 1,
  },
  currency: {
    fontWeight: "500",
    color: "#6B7280",
  },
});

export default React.memo(RowDetail);
