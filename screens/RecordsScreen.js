import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import RecordModel from "../components/RecordModel";
import { db } from "../firebase";
import {
  getDocs,
  query,
  where,
  collection,
  orderBy,
  desc,
  asc,
} from "firebase/firestore";

export default function RecordsScreen({ navigation, route }) {
  const { deviceID } = route.params;
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dataCollection = collection(db, "users");
      const filteredData = query(dataCollection, orderBy("createdAt", desc));

      const querySnapshot = await getDocs(filteredData);
      const dataList = [];
      console.log(querySnapshot);

      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        if (doc.data().deviceUUID == deviceID) {
          const data = {
            id: doc.id,
            deviceID: docData.deviceUUID,
            bmiCategory: docData.bmiCategory,
            bmiResult: docData.bmiResult,
            date: docData.createdAt.toDate().toDateString(),
            time: docData.createdAt.toDate().toTimeString(),
          };
          dataList.push(data);
        }
      });
      setFetchedData(dataList);
      console.log(dataList);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  const renderItem = ({ item }) => (
    <RecordModel
      key={item.id}
      deviceID={item.deviceID}
      bmiCategory={item.bmiCategory}
      bmiResult={item.bmiResult}
      date={item.date}
      time={item.time}
    />
  );

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
          data={fetchedData}
          renderItem={renderItem}
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
