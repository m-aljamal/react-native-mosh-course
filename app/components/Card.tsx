import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
interface ICard {
  image: string;
  title: string;
  subTitle: string;
}
const Card = ({ image, title, subTitle }: ICard) => {
  return (
    <View style={styles.container}>
      <Image style={styles.iamge} source={image} />
      <View style={styles.infContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  iamge: {
    width: "100%",
    height: 200,
  },
  infContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
