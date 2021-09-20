import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, Image } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AppFormField from "../components/AppFormField";
type FormData = {
  email: string;
  password: string;
};
const LoginScreen = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().min(4).label("Password"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <AppFormField
        icon="email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        textContentType="emailAddress"
        control={control}
        error={errors.email?.message}
        name="email"
      />
      <AppFormField
        icon="lock"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        textContentType="emailAddress"
        control={control}
        error={errors.password?.message}
        secureTextEntry
        name="password"
      />

      <Button color="primary" title="Login" onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
