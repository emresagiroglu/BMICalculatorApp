import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function CalculateButton({ handleCalculate }) {
  return (
    <TouchableOpacity onPress={handleCalculate}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>Calculate</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3869f5",
    padding: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
