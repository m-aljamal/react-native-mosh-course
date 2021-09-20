import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useController } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, control, name, ...otherProps }: any) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <View style={styles.contianer}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.gray}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        value={field.value}
        onChangeText={field.onChange}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 20,
  },
});
