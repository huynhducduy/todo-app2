import * as React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";

export default function Menu() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#F96060" }} />
      <View
        style={{
          backgroundColor: "#F96060",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "ABeeZee-Regular",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Projects
        </Text>
      </View>
    </>
  );
}
