import React from "react";
import { RequestContent } from "../components/common";
import PressableCoinCard from "../components/common/PressableCoinCard";
import { ViewContainerScroll } from "../components/ui";
import { useThemeContext } from "../contexts/ThemeContext";
import { useCoinList } from "../hooks/coincapHooks";
import { useAuthNavigation } from "../navigation/helpers";

const ListScreen: React.FC = () => {
  const navigation = useAuthNavigation();
  const { data, loading, error } = useCoinList();
  const { colors } = useThemeContext();

  const handlePressCoin = React.useCallback(
    (id: string) => {
      navigation.navigate("Detail", { id });
    },
    [navigation]
  );

  return (
    <ViewContainerScroll backgroundColor={colors.lightGrey}>
      <RequestContent loading={loading} error={error}>
        {data &&
          data.map((coin) => (
            <PressableCoinCard
              key={coin.id}
              coin={coin}
              onPress={handlePressCoin}
            />
          ))}
      </RequestContent>
    </ViewContainerScroll>
  );
};

export default ListScreen;
