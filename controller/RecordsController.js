import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RecordsButton from "../components/Buttons/RecordsButton";

export default function RecordsController({ navigation, deviceID }) {
  const handleRecords = () => {
    navigation.navigate("Records", {
      deviceID: deviceID,
    });
  };

  return <RecordsButton handleRecords={handleRecords}></RecordsButton>;
}

const styles = StyleSheet.create({});
