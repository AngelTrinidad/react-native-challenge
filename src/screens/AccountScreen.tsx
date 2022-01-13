import React from "react";
import { Image, StyleSheet } from "react-native";
import { Heading, ViewContainer, Text } from "../components/ui";
import Picture from "../assets/finish-illustration.png";
import { DEFAULT_PADDING_HORIZONTAL } from "../styles";
import { useUserContextState } from "../contexts/UserContext";
import { toUpperCaseWords } from "../utils/helpers";

const AccountScreen: React.FC = () => {
  const user = useUserContextState();

  return (
    <ViewContainer style={styles.container}>
      <Image
        style={styles.illustration}
        source={Picture}
        resizeMode="contain"
      />
      {!!user && (
        <Heading style={styles.title}>
          Hello {toUpperCaseWords(user.name)}
        </Heading>
      )}
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
