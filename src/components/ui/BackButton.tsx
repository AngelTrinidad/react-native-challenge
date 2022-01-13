import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { HEADER_PADDING, THEME } from "../../styles";

const BackButton: React.FC = () => (
  <MaterialIcons
    name="arrow-back-ios"
    color={THEME.primaryColor}
    size={12}
    style={{ paddingLeft: HEADER_PADDING }}
  />
);

export default React.memo(BackButton);
