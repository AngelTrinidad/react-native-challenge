import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Heading,
  TextInput,
  Button,
  KeyboardAvoidingContainer,
} from "../components/ui";
import { useUserContextUpdater } from "../contexts/UserContext";
import { User } from "../models";

export default function HomeScreen() {
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const { userHandler } = useUserContextUpdater();

  const handleSignin = React.useCallback(() => {
    const user: User = {
      name,
    };
    userHandler(user);
  }, [name]);

  return (
    <KeyboardAvoidingContainer style={styles.container}>
      <Heading>Welcome</Heading>
      <View style={styles.form}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          styleContainer={styles.name}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your passowrd"
          secureTextEntry
        />
      </View>
      <Button
        title="Sign in"
        disabled={!name || !password}
        onPress={handleSignin}
      />
    </KeyboardAvoidingContainer>
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
    marginBottom: 16,
  },
});
