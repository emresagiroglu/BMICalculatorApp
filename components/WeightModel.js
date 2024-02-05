import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function WeightModel({ weight, onWeightChange }) {
  const [inputValue, setInputValue] = useState(weight.toString());

  // weight prop'u değiştiğinde inputValue'yi güncelle
  useEffect(() => {
    setInputValue(weight.toString());
  }, [weight]);

  const onFocus = () => {
    // TextInput'a tıklandığında içindeki değeri temizle
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>Weight(kg)</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={onWeightChange}
          keyboardType="numeric"
          maxLength={3}
          onFocus={onFocus}
        />
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
  headerView: {
    justifyContent: "center",
    alignItems: "center",
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
  input: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "500",
  },
});
