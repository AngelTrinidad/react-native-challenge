import React from "react";
import { ActivityIndicator } from "react-native";
import { useThemeContext } from "../../../contexts/ThemeContext";

const Loading: React.FC = () => {
  const { colors } = useThemeContext();
  return <ActivityIndicator size="large" color={colors.primary} />;
};

export default React.memo(Loading);
