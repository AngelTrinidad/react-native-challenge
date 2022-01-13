import React from "react";
import { StyleSheet } from "react-native";
import PartnerCard from "../components/common/PartnerCard/PartnerCard";
import { Heading, Text, ViewContainer } from "../components/ui";
import { DEFAULT_PADDING_HORIZONTAL } from "../styles";

const PartnerScreen: React.FC = () => {
  return (
    <ViewContainer style={styles.container}>
      <Heading style={styles.title}>Partners</Heading>
      <Text style={styles.text}>Here are some apps I was involved in:</Text>
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} style={styles.card} />
      ))}
    </ViewContainer>
  );
};

const partners = [
  {
    id: "quanto",
    name: "Quanto",
    description:
      "Paraguayan fintech startup, a financial app for people, freelancers, and companies.",
    roles: "React/RN developer, Frontend Team Leader, and Product Owner.",
    status: "Beta development is in progress, it will publish this year",
  },
  {
    id: "jobs",
    name: "Jobs PY",
    description: "App to find and apply for jobs.",
    roles: "RN developer",
    status: "Beta testing is in progress, it will publish soon",
  },
];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
  },
  title: {
    textAlign: "center",
    marginVertical: 24,
  },
  text: {
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    marginBottom: 12,
  },
});

export default PartnerScreen;
