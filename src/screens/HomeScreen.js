import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          console.log("Button Pressed");
        }}
      />

      <TouchableOpacity
        onPress={() => console.log("Touchable Opacity Pressed")}
      >
        <Text>Go to Components Demo</Text>
        <Text>Go to Components Demo</Text>
        <Text>Go to Components Demo</Text>
        <Text>Go to Components Demo</Text>
        <Text>Go to Components Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
