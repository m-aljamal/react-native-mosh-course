import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.images} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  images: {
    marginRight: 10,
  },
});
