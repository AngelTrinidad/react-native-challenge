import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HEADER_PADDING, THEME } from "../../styles";

type Props = {
  onPress?: () => void;
};

const LogoutButton: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons
      name="log-out-outline"
      color={THEME.primaryColor}
      size={28}
      style={{ paddingRight: HEADER_PADDING }}
    />
  </TouchableOpacity>
);

export default React.memo(LogoutButton);
