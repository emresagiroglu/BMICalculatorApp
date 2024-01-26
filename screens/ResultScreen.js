import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ResultScreen({ route, navigation }) {
  const { result } = route.params;
  const { name } = route.params;
  const { color } = route.params;
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack("Home");
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.resultView}>
        <Text style={styles.header}>YOUR BMI SCORE:</Text>
        <Text style={styles.result}>{result}</Text>
        <Text style={[styles.categoryText, { color: color }]}>{category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  navigation: {
    width: "20%",
    height: "5%",
    marginTop: "10%",
    marginLeft: "5%",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  resultView: {
    marginTop: "40%",
    backgroundColor: "lightgray",
    width: "70%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  header: {
    fontSize: 25,
    fontWeight: "700",
  },
  result: {
    marginTop: "10%",
    fontSize: 50,
    fontWeight: "500",
  },
  categoryText: {
    marginTop: "5%",
    fontSize: 25,
    fontWeight: "700",
  },
});
