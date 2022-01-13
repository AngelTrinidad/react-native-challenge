import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { Partner } from "../../../models";
import { Card, Text } from "../../ui";
import RowDetail from "./RowDetail";

type Props = {
  partner: Partner;
  style?: ViewStyle;
};

const PartnerCard: React.FC<Props> = ({ partner, style }) => {
  const { colors } = useThemeContext();
  return (
    <Card style={style}>
      <Text style={[styles.name, { color: colors.primary }]}>
        {partner.name}
      </Text>
      <Text style={styles.description}>{partner.description}</Text>
      <RowDetail label="Roles" value={partner.roles} />
      <RowDetail label="Status" value={partner.status} />
    </Card>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "700",
  },
  description: {
    marginVertical: 12,
  },
});

export default React.memo(PartnerCard);
