import Constants from "expo-constants";
import React, { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Screen: FC<any> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.viwe]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  viwe: {
    flex: 1,
  },
});
