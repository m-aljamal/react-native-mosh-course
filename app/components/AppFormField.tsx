import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({
  control,
  error,
  name,
  ...otherProps
}: {
  control: any;
  error: string;
  name: string;
  otherProps: any;
}) => {
  return (
    <View>
      <AppTextInput  {...otherProps} name={name} control={control} />
      <ErrorMessage error={error} />
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
