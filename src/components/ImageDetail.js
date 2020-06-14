import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, src }) => {
  return (
    <View>
      <Image source={src} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
