import React from "react";
import { StyleSheet, View } from "react-native";
import { Heading, ViewContainer, TextInput, Button } from "../components/ui";

export default function HomeScreen() {
  return (
    <ViewContainer style={styles.container}>
      <Heading>Welcome</Heading>
      <View style={styles.form}>
        <TextInput placeholder="Enter your name" styleContainer={styles.name} />
        <TextInput placeholder="Enter your passowrd" />
      </View>
      <Button title="Sign in" onPress={() => alert("List")} />
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginVertical: 44,
  },
  name: {
    marginBottom: 16
  }
});
