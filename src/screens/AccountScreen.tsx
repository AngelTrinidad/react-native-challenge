import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Heading, ViewContainer, Text } from "../components/ui";
import Picture from "../assets/finish-illustration.png";
import { DEFAULT_PADDING_HORIZONTAL } from "../styles";

const AccountScreen: React.FC = () => {
  return (
    <ViewContainer style={styles.container}>
      <Image style={styles.illustration} source={Picture} resizeMode="contain" />
      <Heading style={styles.title}>Hello, $contextName</Heading>
      <Text>Glad you're here. Hope to see you soon!</Text>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: "100%",
    maxHeight: 140,
  },
  title: {
    marginVertical: 24,
  },
});

export default AccountScreen;
