import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RecordsButton from "../components/Buttons/RecordsButton";

export default function RecordsController({ navigation }) {
  const handleRecords = () => {
    navigation.navigate("Records");
  };

  return <RecordsButton handleRecords={handleRecords}></RecordsButton>;
}

const styles = StyleSheet.create({});
