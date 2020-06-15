import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      {/* 
        1. 자동완성 (autoCorrect)
        2. 첫 글자 대문자 (autoCapitalize)
    */}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
