import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
const listings = [
  {
    id: "1",
    title: "Red jaclet for sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: "2",
    title: "Couch in greate",
    price: 1000,
    image: require("../../assets/jacket.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.constainer}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  constainer: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
