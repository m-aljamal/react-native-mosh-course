import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
type Props = {
  style: any;
};
const AppText: React.FC<Props> = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Rovoto",
      },
    }),
  },
});
