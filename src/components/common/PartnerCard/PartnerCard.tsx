import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Partner } from "../../../models";
import { THEME } from "../../../styles";
import { Card, Text } from "../../ui";
import RowDetail from "./RowDetail";

type Props = {
  partner: Partner;
  style?: ViewStyle;
};

const PartnerCard: React.FC<Props> = ({ partner, style }) => {
  return (
    <Card style={style}>
      <Text style={styles.name}>{partner.name}</Text>
      <Text style={styles.description}>{partner.description}</Text>
      <RowDetail label="Roles" value={partner.roles} />
      <RowDetail label="Status" value={partner.status} />
    </Card>
  );
};

const styles = StyleSheet.create({
  name: {
    color: THEME.primaryColor,
    fontWeight: "700",
  },
  description: {
    marginVertical: 12,
  },
});

export default React.memo(PartnerCard);
