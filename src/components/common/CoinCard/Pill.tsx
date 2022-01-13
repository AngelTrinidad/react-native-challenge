import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { roundNumber } from "../../../utils/helpers";

type ConditionalStyles = {
  backgroundColor: string;
  textColor: string;
  icon: "arrow-up" | "arrow-down";
  iconColor: string;
};

type Props = {
  value: number;
};

const Pill: React.FC<Props> = ({ value }) => {
  const valueFormatted = React.useMemo(() => roundNumber(Math.abs(value), 1), [value]);

  const conditionalStyles: ConditionalStyles =
    value > 0
      ? {
          backgroundColor: "#FDDCDC",
          textColor: "#A50606",
          icon: "arrow-up",
          iconColor: "#F33A3A",
        }
      : {
          backgroundColor: "#D1FAE5",
          textColor: "#065F46",
          icon: "arrow-down",
          iconColor: "#10B981",
        };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: conditionalStyles.backgroundColor },
      ]}
    >
      <Ionicons
        name={conditionalStyles.icon}
        color={conditionalStyles.iconColor}
        size={14}
      />
      <Text style={[styles.value, { color: conditionalStyles.textColor }]}>
        {valueFormatted}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 72,
    minHeight: 24,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 2
  },
});

export default React.memo(Pill);
