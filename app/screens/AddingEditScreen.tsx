import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import * as yup from "yup";
import AppFormField from "../components/AppFormField";
import AppPicker from "../components/AppPicker";
import Button from "../components/Button";
import ImageList from "../components/ImageList";

const categories = [
  { label: "shor", value: "1" },
  { label: "bast", value: "3" },
  { label: "ships", value: "2" },
];

interface IFormData {
  title: string;
  price: string;
  category: string;
  description: string;
  images: string[];
}
const schema = yup.object().shape({
  title: yup.string().required(),
  price: yup.string().required(),
  category: yup.string().required(),
  description: yup.string().required(),
  // images: yup.array().min(1, "Please select at least one image"),
});
const AddingEditScreen = () => {
  const [selectedCategorey, setSelectedCategory] = useState(categories[0]);
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((image) => image !== uri));
  };
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const onSubmit = (data: IFormData) => {
    console.log("data", data);
  };
  setValue("category", selectedCategorey.value);
  setValue("images", imageUris);
  return (
    <Screen>
      <ImageList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppFormField
        maxLength={255}
        name="title"
        placeholder="Title"
        error={errors.title?.message}
        control={control}
      />
      <AppFormField
        name="price"
        maxLength={255}
        placeholder="Price"
        keyboardType="numeric"
        error={errors.price?.message}
        maxLength={8}
        control={control}
      />
      <AppPicker
        onSelectItem={(item) => setSelectedCategory(item)}
        selectedItem={selectedCategorey}
        items={categories}
        name="category"
        placeholder="Category"
      />
      <AppFormField
        name="description"
        multiline
        maxLength={255}
        numberOfLines={3}
        placeholder="description"
        error={errors.description?.message}
        control={control}
      />
      <Button color="primary" title="Post" onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
};

export default AddingEditScreen;

const styles = StyleSheet.create({});
