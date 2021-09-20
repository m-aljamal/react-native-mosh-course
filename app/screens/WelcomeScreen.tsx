import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../../assets/welcome.jpg")}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text>Sell Waht you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button color="primary" title="login" onPress={() => {}} />
        <Button color="secondary" title="register" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});
