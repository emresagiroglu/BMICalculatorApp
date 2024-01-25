import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GenderModel from "../components/GenderModel";

export default function GenderController({ gender, onGenderChange }) {
  const onPressHandlerMale = () => {
    if (gender !== null) {
      onGenderChange(null);
    }
    onGenderChange("Male");
  };
  const onPressHandlerFemale = () => {
    if (gender !== null) {
      onGenderChange(null);
    }
    onGenderChange("Female");
  };

  return (
    <>
      <GenderModel
        gender={"Male"}
        pressHandler={onPressHandlerMale}
        chosenGender={gender}
      ></GenderModel>
      <GenderModel
        gender={"Female"}
        pressHandler={onPressHandlerFemale}
        chosenGender={gender}
      ></GenderModel>
    </>
  );
}

const styles = StyleSheet.create({});
