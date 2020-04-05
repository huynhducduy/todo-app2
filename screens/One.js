import * as React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WalkThrough from "./WalkThrough";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="WalkThrough" component={WalkThrough} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </View>
  );
}
