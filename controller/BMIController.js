import { Alert, StyleSheet } from "react-native";
import CalculateButton from "../components/Buttons/CalculateButton";
import { db } from "../firebase";
import {
  getDocs,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";

export default function BMIController({
  weight,
  height,
  gender,
  navigation,
  deviceID,
}) {
  let bmiCategory = "";
  let color = "";

  const handleCalculate = async () => {
    if (gender === null) {
      Alert.alert("Please Select Your Gender", "Please");
    } else {
      const BMIResult = Number(
        ((weight / (height * height)) * 10000).toFixed(1)
      );

      if (BMIResult < 18.5) {
        bmiCategory = "Underweight";
        color = "blue";
      } else if (BMIResult >= 18.5 && BMIResult <= 24.9) {
        bmiCategory = "Normal Weight";
        color = "green";
      } else if (BMIResult >= 25 && BMIResult <= 29.9) {
        bmiCategory = "Overweight";
        color = "#E26313";
      } else {
        bmiCategory = "Obesity";
        color = "red";
      }
      // firebase
      writeToFirebase(BMIResult, bmiCategory);

      //navigate to result screen
      navigation.navigate("Result", {
        result: BMIResult,
        color: color,
        category: bmiCategory,
      });
    }
  };

  const writeToFirebase = async (BMIResult, bmiCategory) => {
    try {
      const postsCollectionRef = collection(db, "users");
      const postedDoc = await addDoc(postsCollectionRef, {
        deviceUUID: deviceID,
        bmiResult: BMIResult,
        bmiCategory: bmiCategory,
        createdAt: serverTimestamp(),
      });
      console.log("yazıldı");
    } catch {
      console.log("hata");
    }
  };

  return (
    <CalculateButton
      navigation={navigation}
      handleCalculate={handleCalculate}
    ></CalculateButton>
  );
}

const styles = StyleSheet.create({});
