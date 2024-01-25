import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function WeightModel({ weight, onWeightChange }) {
  const incrementHandler = () => {
    const newWeight = weight + 1;
    onWeightChange(newWeight);
  };

  const decrementHandler = () => {
    const newWeight = weight - 1;
    onWeightChange(newWeight);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weight(kg)</Text>
      <Text style={styles.weight}>{weight}</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={decrementHandler}>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "400" }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={incrementHandler}>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "400" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 2,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    color: "#909090",
  },
  weight: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#3869f5",
    borderRadius: 10,
  },
});
