import React from "react";
import { StyleSheet } from "react-native";
import { CoinCard, RequestContent } from "../components/common";
import { Button, ViewContainer } from "../components/ui";
import { useThemeContext } from "../contexts/ThemeContext";
import { useCoinDetail } from "../hooks/coincapHooks";
import { useAuthNavigation, useAuthRoute } from "../navigation/helpers";
import { DEFAULT_PADDING_TOP } from "../styles";

const DetailScreen: React.FC = () => {
  const navigation = useAuthNavigation();
  const { colors } = useThemeContext();
  const {
    params: { id },
  } = useAuthRoute<"Detail">();
  const { data, loading, error } = useCoinDetail(id);

  const handlePressWallet = React.useCallback(() => {
    navigation.navigate("Wallet");
  }, [navigation]);

  return (
    <ViewContainer style={styles.container} backgroundColor={colors.lightGrey}>
      <RequestContent loading={loading} error={error}>
        {!!data && <CoinCard coin={data} withDetail />}
        <Button
          title="My Wallet"
          onPress={handlePressWallet}
          style={styles.button}
        />
      </RequestContent>
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
