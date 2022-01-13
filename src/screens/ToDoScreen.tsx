import React from "react";
import { StyleSheet, Image } from "react-native";
import { Heading, ViewContainer, Text, Button } from "../components/ui";
import Picture from "../assets/home-illustration.png";
import { usePublicNavigation } from "../navigation/helpers";

const HomeScreen: React.FC = ()  => {
  const navigation = usePublicNavigation()
  const handlePressStart = React.useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <ViewContainer style={styles.container}>
      <Image style={styles.illustration} source={Picture} resizeMode="cover" />
      <Heading style={styles.title}>Howdy partner!</Heading>
      <Text align="center">This is your assignment.</Text>
      <Text align="center">Follow the instructions on the Readme file.</Text>
      <Text align="center" style={styles.lastText}>Don't worry, it's easy! You should have the app looking smooth in no time.</Text>
      <Button title="Get Started" onPress={handlePressStart} />
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 206,
    height: 206,
  },
  title: {
    marginVertical: 24,
  },
  lastText: {
    marginTop: 12,
    marginBottom: 44
  },
});

export default HomeScreen;