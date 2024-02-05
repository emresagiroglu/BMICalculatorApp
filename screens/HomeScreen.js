import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import GenderController from "../controller/GenderController";
import WeightModel from "../components/WeightModel";
import HeightModel from "../components/HeightModel";
import BMIController from "../controller/BMIController";
import RecordsController from "../controller/RecordsController";
// import DeviceInfo from "react-native-device-info";

export default function HomeScreen({ route, navigation }) {
  const [deviceID, setDeviceID] = useState(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(160);
  const [gender, setGender] = useState(null);

  useEffect(() => {
    // DeviceInfo.getUniqueId().then((result) => {
    //   setDeviceID(result);
    // });

    // Parametrelerden gelen resetValues kontrol et ve değerleri sıfırla
    if (route.params?.resetValues) {
      setWeight(70);
      setHeight(160);
      setGender(null);

      navigation.setParams({ resetValues: undefined });
    }
  }, [route.params?.resetValues]);

  const handleGenderChange = (newGender) => {
    setGender(newGender);
  };
  const handleWeightChange = (newWeight) => {
    setWeight(newWeight);
  };
  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            BMI Calculator
          </Text>
          <Text>Welcome!</Text>
        </View>
        <View style={styles.midView}>
          <View style={styles.genderView}>
            <GenderController
              gender={gender}
              onGenderChange={handleGenderChange}
            ></GenderController>
          </View>
        </View>
        <View style={styles.weightView}>
          <WeightModel
            weight={weight}
            onWeightChange={handleWeightChange}
          ></WeightModel>
        </View>
        <View style={styles.heightView}>
          <HeightModel
            height={height}
            onHeightChange={handleHeightChange}
          ></HeightModel>
        </View>
        <View style={styles.tabView}>
          <RecordsController
            navigation={navigation}
            // deviceID={deviceID}
          ></RecordsController>
          <BMIController
            navigation={navigation}
            weight={weight}
            height={height}
            gender={gender}
            // deviceID={deviceID}
          ></BMIController>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  midView: {
    height: "20%",
    justifyContent: "center",
  },
  genderView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  weightView: {
    marginTop: "5%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
  },
  heightView: {
    height: "15%",
  },
  tabView: {
    flexDirection: "row",
    height: "15%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
