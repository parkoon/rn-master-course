import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" src={require("../../assets/forest.jpg")}>
        Image Screen
      </ImageDetail>
      <ImageDetail title="Beach" src={require("../../assets/beach.jpg")}>
        Image Screen
      </ImageDetail>
      <ImageDetail title="Mountain" src={require("../../assets/mountain.jpg")}>
        Image Screen
      </ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
