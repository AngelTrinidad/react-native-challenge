import { TextStyle, ViewStyle } from "react-native";

export const THEME = {
  primaryColor: "#1FC4DB",
  primaryBackgroundColor: "white",
  secondaryBackgroundColor: "#F8F8FA",
};

export const DEFAULT_PADDING_HORIZONTAL = 30;

export const DEFAULT_PADDING_TOP = 24;

export const HEADER_PADDING = 12;

export const SHADOW_STYLES: ViewStyle = {
  shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.125,
  shadowRadius: 1,
  elevation: 10,
};

export const NAVIGATOR_STYLES: {
  headerBackTitle: TextStyle;
  tabbarLabel: TextStyle;
} = {
  headerBackTitle: {
    fontSize: 14,
    color: THEME.primaryColor,
  },
  tabbarLabel: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
};
