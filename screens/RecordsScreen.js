import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RecordModel from "../components/RecordModel";

export default function RecordsScreen({ navigation }) {
  const data = [
    {
      id: "1",
      time: "January 25, 2024",
      bmi: "25.6",
    },
    {
      id: "2",
      time: "January 25, 2024",
      bmi: "28.6",
    },
    {
      id: "3",
      time: "January 25, 2024",
      bmi: "21.6",
    },
    {
      id: "4",
      time: "January 25, 2024",
      bmi: "30.6",
    },
    {
      id: "5",
      time: "January 25, 2024",
      bmi: "35.6",
    },
    {
      id: "6",
      time: "January 25, 2024",
      bmi: "15.6",
    },
    {
      id: "7",
      time: "January 25, 2024",
      bmi: "29.6",
    },
  ];

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
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Records:</Text>
      <View style={styles.records}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <RecordModel time={item.time} bmi={item.bmi} />
          )}
          keyExtractor={(item) => item.id}
        />
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
  records: {
    marginTop: "5%",
    flexDirection: "row",
    flex: 1,
  },
});
