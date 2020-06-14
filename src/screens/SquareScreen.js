import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREAMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + COLOR_INCREAMENT)}
        onDecrease={() => setRed(red - COLOR_INCREAMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREAMENT)}
        onDecrease={() => setGreen(green + COLOR_INCREAMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREAMENT)}
        onDecrease={() => setBlue(blue + COLOR_INCREAMENT)}
      />

      <View
        style={{
          height: 200,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
