import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

const PikerItem = ({ label, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PikerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
