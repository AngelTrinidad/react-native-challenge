import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { CoinCard } from "../components/common";
import { ViewContainerScroll } from "../components/ui";
import { useAuthNavigation } from "../navigation/helpers";
import { THEME } from "../styles";

const ListScreen: React.FC = () => {
  const navigation = useAuthNavigation();

  const handlePressCoin = React.useCallback(
    (id: string) => {
      navigation.navigate("Detail", { id });
    },
    [navigation]
  );

  return (
    <ViewContainerScroll backgroundColor={THEME.secondaryBackgroundColor}>
      {mockData.data.map((coin) => (
        <TouchableOpacity
          key={coin.id}
          style={styles.coinCard}
          onPress={() => handlePressCoin(coin.id)}
        >
          <CoinCard coin={coin} />
        </TouchableOpacity>
      ))}
    </ViewContainerScroll>
  );
};

const styles = StyleSheet.create({
  coinCard: {
    marginBottom: 20,
  },
});

const mockData = {
  data: [
    {
      id: "bitcoin",
      rank: 1,
      symbol: "BTC",
      name: "Bitcoin",
      supply: 18699443.0,
      maxSupply: 21000000.0,
      marketCapUsd: 1015247880827.1353075029297279,
      volumeUsd24Hr: "29060906818.4485396840769794",
      priceUsd: 54292.9477004815227653,
      changePercent24Hr: -6.511687012348302,
      vwap24Hr: "55997.2133851391811930",
      explorer: "https://blockchain.info/",
    },
    {
      id: "ethereum",
      rank: 2,
      symbol: "ETH",
      name: "Ethereum",
      supply: 115737290.0615,
      maxSupply: null,
      marketCapUsd: 386628811693.0624014790470075,
      volumeUsd24Hr: "31432181076.4195139481844396",
      priceUsd: 3340.5725284186038137,
      changePercent24Hr: 1.1359859562693353,
      vwap24Hr: "3352.4239757346908390",
      explorer: "https://etherscan.io/",
    },
  ],
};

export default ListScreen;
