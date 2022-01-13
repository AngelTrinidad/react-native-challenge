import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { THEME } from "../../../styles";
import { TCurrency } from "../../../types";
import { formatNumber, roundNumber } from "../../../utils/helpers";
import { Text } from "../../ui";
import Currency from "./Currency";

type Props = {
  amount: number;
  style?: ViewStyle;
  currency?: TCurrency;
};

const PriceText: React.FC<Props> = ({ amount, currency, style }) => {
  const amountFormatted = React.useMemo(
    () => formatNumber(roundNumber(amount)),
    [amount]
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.amount} adjustsFontSizeToFit numberOfLines={1}>{amountFormatted}</Text>
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
