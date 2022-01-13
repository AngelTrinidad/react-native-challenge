import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { roundNumber } from "../../../utils/helpers";

type ConditionalStyles = {
  backgroundColor: string;
  textColor: string;
  icon: "arrow-up" | "arrow-down" | null;
  iconColor: string;
};

type Props = {
  value: number;
};

const Pill: React.FC<Props> = ({ value }) => {
  const conditionalStyles: ConditionalStyles = React.useMemo(() => {
    if (value == 0) {
      return {
        backgroundColor: "#6B7280",
        textColor: "white",
        icon: null,
        iconColor: "white",
      };
    } else if (value > 0) {
      return {
        backgroundColor: "#D1FAE5",
        textColor: "#065F46",
        icon: "arrow-up",
        iconColor: "#10B981",
      };
    }
    return {
      backgroundColor: "#FDDCDC",
      textColor: "#A50606",
      icon: "arrow-down",
      iconColor: "#F33A3A",
    };
  }, [value]);

  const valueFormatted = React.useMemo(
    () => roundNumber(Math.abs(value), 2),
    [value]
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: conditionalStyles.backgroundColor },
      ]}
    >
      {!!conditionalStyles.icon && (
        <Ionicons
          name={conditionalStyles.icon}
          color={conditionalStyles.iconColor}
          size={12}
        />
      )}
      <Text
        style={[styles.value, { color: conditionalStyles.textColor }]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {valueFormatted}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 72,
    minHeight: 24,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 2,
  },
});

export default React.memo(Pill);
