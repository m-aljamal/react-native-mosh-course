import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
 import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../../assets/chare.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
});
