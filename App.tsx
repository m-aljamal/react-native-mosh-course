import React, { useEffect, useState } from "react";
import { Switch, Text, Button, Image } from "react-native";
import AppPicker from "./app/components/AppPicker";

import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";
import AddingEditScreen from "./app/screens/AddingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ImagePicker from "./app/components/AppImagePicker";
import ImageInput from "./app/components/ImageInput";
import AppImagePicker from "./app/components/AppImagePicker";

export default function App() {
  return (
   <AddingEditScreen/>
  );
}
