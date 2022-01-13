import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Coin } from "../../models";
import CoinCard from "./CoinCard/CoinCard";

type Props = {
  coin: Coin;
  onPress: (id: string) => void;
};
const PressableCoinCard: React.FC<Props> = ({ coin, onPress }) => {
  const handlePress = React.useCallback(() => {
    onPress(coin.id);
  }, [coin, onPress]);

  return (
    <TouchableOpacity style={styles.coinCard} onPress={handlePress}>
      <CoinCard coin={coin} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  coinCard: {
    marginTop: 20,
  },
});

export default React.memo(PressableCoinCard);
