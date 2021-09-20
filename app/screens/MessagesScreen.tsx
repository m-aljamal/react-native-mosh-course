import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeprator from "../components/ListItemSeprator";
import Screen from "../components/Screen";
const initialMessages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../../assets/face.jpeg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../../assets/face.jpeg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMesseages] = useState(initialMessages);
  const [refreshing, setrefreshing] = useState(false);
  const handleDelete = (message: any) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMesseages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refreshing}
        onRefresh={() => {
          setMesseages([
            {
              id: "3",
              title: "T3",
              description: "D3",
              image: require("../../assets/face.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
