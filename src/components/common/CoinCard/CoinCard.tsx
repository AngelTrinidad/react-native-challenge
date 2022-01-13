import React from "react";
import { View, StyleSheet } from "react-native";
import Pill from "./Pill";
import PriceText from "./PriceText";
import RowDetail from "./RowDetail";
import { Card, Text } from "../../ui";
import { Coin } from "../../../models";

type Props = {
  coin: Coin;
  withDetail?: boolean;
};

const CoinCard: React.FC<Props> = ({ coin, withDetail }) => {
  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.symbol}>{coin.symbol}</Text>
        <Text style={styles.name}> - {coin.name}</Text>
        <Text style={styles.rank}>#{coin.rank}</Text>
      </View>
      <View style={styles.info}>
        <PriceText style={styles.price} amount={coin.priceUsd} />
        <Pill value={coin.changePercent24Hr} />
      </View>
      {withDetail && (
        <View style={styles.detail}>
          <RowDetail label="Supply" value={coin.supply} />
          <RowDetail label="Max Supply" value={coin.maxSupply} />
          <RowDetail
            label="Market Cap"
            value={coin.marketCapUsd}
            currency="USD"
          />
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 1,
  },
  symbol: {
    fontSize: 16,
    fontWeight: "700",
  },
  name: {
    fontSize: 16,
    marginRight: "auto",
  },
  rank: {
    color: "#6B7280",
    fontWeight: "500",
  },
  price: {
    flex: 1
  },
  detail: {
    marginTop: 6,
    marginLeft: 1,
  },
});

export default React.memo(CoinCard);
