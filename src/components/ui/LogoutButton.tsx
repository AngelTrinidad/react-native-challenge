import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HEADER_PADDING } from "../../styles";
import { useThemeContext } from "../../contexts/ThemeContext";

type Props = {
  onPress?: () => void;
};

const LogoutButton: React.FC<Props> = ({ onPress }) => {
  const { colors } = useThemeContext();
  
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name="log-out-outline"
        color={colors.primary}
        size={28}
        style={{ paddingRight: HEADER_PADDING }}
      />
    </TouchableOpacity>
  );
};

export default React.memo(LogoutButton);
