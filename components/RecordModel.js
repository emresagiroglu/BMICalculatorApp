import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RecordModel({
  date,
  deviceID,
  bmiCategory,
  bmiResult,
  time,
}) {
  const splittedTime = time.slice(0, 5);
  return (
    <View style={styles.container}>
      <View style={styles.timeView}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.date}>{splittedTime}</Text>
      </View>
      <View style={styles.resultView}>
        <Text style={styles.bmi}>BMI Result: {bmiResult}</Text>
        <Text style={styles.category}>{bmiCategory}</Text>
      </View>
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
  timeView: {
    alignItems: "center",
  },
  date: {
    fontSize: 15,
    fontWeight: "500",
  },
  resultView: {
    justifyContent: "center",
    alignItems: "center",
  },
  bmi: {
    fontSize: 20,
    fontWeight: "bold",
  },
  category: {
    marginTop: 1,
    fontSize: 12,
  },
});
