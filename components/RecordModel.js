import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RecordModel({ time, bmi }) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.bmi}>BMI Result: {bmi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    margin: 5,
    justifyContent: "space-around",
    alignItems: "center",
    padding: "8%",
    borderRadius: 20,
    flexDirection: "row",
  },
  time: {
    fontSize: 20,
    fontWeight: "30",
  },
  bmi: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
