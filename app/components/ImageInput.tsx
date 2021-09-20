import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }: any) => {
  const requestPermistion = async () => {
    //   const result = await  Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.LOCATION)
    //  console.log(result);

    const res = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(res);

    if (!res.granted) alert("You need to enable permission to access");
  };
  useEffect(() => {
    requestPermistion();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!res.cancelled) {
        onChangeImage(res.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialIcons name="camera-alt" size={35} color={colors.gray} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
