import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [value, setValue] = useState("");
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
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <Text>this is text: {value}</Text>
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
