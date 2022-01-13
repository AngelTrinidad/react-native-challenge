import React from "react";
import { StyleSheet } from "react-native";
import { CoinCard } from "../components/common";
import { Button, ViewContainer } from "../components/ui";
import { Coin } from "../models";
import { useAuthNavigation } from "../navigation/helpers";
import { DEFAULT_PADDING_TOP, THEME } from "../styles";

const DetailScreen: React.FC = () => {
  const navigation = useAuthNavigation();
  const [coin, setCoin] = React.useState<Coin | null>({
    id: "bitcoin",
    rank: 1,
    symbol: "BTC",
    name: "Bitcoin",
    supply: 18699443.0,
    maxSupply: 21000000.0,
    marketCapUsd: 1015247880827.1353075029297279,
    priceUsd: 54292.9477004815227653,
    changePercent24Hr: -6.511687012348302,
  });

  const handlePressWallet = React.useCallback(() => {
    navigation.navigate("Wallet");
  }, [navigation]);

  return (
    <ViewContainer
      style={styles.container}
      backgroundColor={THEME.secondaryBackgroundColor}
    >
      {coin && <CoinCard coin={coin} withDetail />}
      <Button
        title="My Wallet"
        onPress={handlePressWallet}
        style={styles.button}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: DEFAULT_PADDING_TOP,
  },
  button: {
    marginTop: 24,
  },
});

export default DetailScreen;
