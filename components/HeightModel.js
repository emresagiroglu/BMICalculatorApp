import { StyleSheet, Text, View, AppRegistry } from "react-native";
import React, { useState, version } from "react";
import Slider from "react-native-smooth-slider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HeightModel({ height, onHeightChange }) {
  const sliderHandler = (newHeight) => {
    onHeightChange(newHeight);
  };
  return (
    <>
      <Text style={styles.header}>Height(cm)</Text>
      <Text style={{ alignSelf: "center", fontSize: 30, fontWeight: "bold" }}>
        {" "}
        {height}
      </Text>
      <GestureHandlerRootView style={styles.container}>
        <Slider
          value={height}
          thumbTintColor={"#3869f5"}
          minimumValue={100}
          maximumValue={220}
          step={1}
          useNativeDriver={true}
          onValueChange={sliderHandler}
          onSlidingComplete={sliderHandler}
        />
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "40%",
    marginHorizontal: 30,
    alignItems: "stretch",
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    color: "#909090",
  },
});
