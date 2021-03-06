import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

const ErrorMessage = ({ error }: any) => {
  if (!error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
