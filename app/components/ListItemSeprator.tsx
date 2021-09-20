import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItemSeprator = () => {
  return <View style={styles.separator} />;
};

export default ListItemSeprator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
