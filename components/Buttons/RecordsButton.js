import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function RecordsButton({ handleRecords }) {
  return (
    <TouchableOpacity onPress={handleRecords}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>Records</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
