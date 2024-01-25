import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";

export default function GenderModel({ gender, chosenGender, pressHandler }) {
  return (
    <Pressable
      style={{
        backgroundColor: "lightgray",
        borderRadius: 60,
        width: chosenGender === gender ? 120 : 100,
        height: chosenGender === gender ? 120 : 100,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
      }}
      onPress={pressHandler}
    >
      <Image
        style={{
          width: chosenGender === gender ? 95 : 80,
          height: chosenGender === gender ? 95 : 80,
          resizeMode: "contain",
          borderRadius: 60,
        }}
        source={
          gender === "Male"
            ? require("../assets/man.png")
            : require("../assets/woman.png")
        }
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
