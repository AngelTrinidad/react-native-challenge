import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { HEADER_PADDING } from "../../styles";
import { useThemeContext } from "../../contexts/ThemeContext";

const BackButton: React.FC = () => {
  const { colors } = useThemeContext();
  return (
    <MaterialIcons
      name="arrow-back-ios"
      color={colors.primary}
      size={12}
      style={{ paddingLeft: HEADER_PADDING }}
    />
  );
};

export default React.memo(BackButton);
