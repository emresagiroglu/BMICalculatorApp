import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResultScreen from "./screens/ResultScreen";
import RecordsScreen from "./screens/RecordsScreen";
import { useState } from "react";
import DeviceInfo from "react-native-device-info";
import * as Device from "expo-device";

const Stack = createNativeStackNavigator();

export default function App() {
  const [deviceID, setDeviceID] = useState(null);

  DeviceInfo.getUniqueId().then((result) => {
    setDeviceID(result);
  });
  console.log(deviceID);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Result"
          component={ResultScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Records"
          component={RecordsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
