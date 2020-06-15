import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREAMENT = 10;

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "RED":
        return state.red + action.payload > 255 ||
          state.red + action.payload < 0
          ? state
          : {
              ...state,
              red: state.red + action.payload,
            };

      case "GREEN":
        return state.green + action.payload > 255 ||
          state.green + action.payload < 0
          ? state
          : {
              ...state,
              green: state.green + action.payload,
            };
      case "BLUE":
        return state.blue + action.payload > 255 ||
          state.blue + action.payload < 0
          ? state
          : {
              ...state,
              blue: state.blue + action.payload,
            };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "RED", payload: COLOR_INCREAMENT })}
        onDecrease={() =>
          dispatch({ type: "RED", payload: -1 * COLOR_INCREAMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "GREEN", payload: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ type: "GREEN", payload: -1 * COLOR_INCREAMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "BLUE", payload: COLOR_INCREAMENT })}
        onDecrease={() =>
          dispatch({ type: "BLUE", payload: -1 * COLOR_INCREAMENT })
        }
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
