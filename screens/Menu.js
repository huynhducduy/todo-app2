import * as React from "react";
import { Text, View, StatusBar, SafeAreaView } from "react-native";

export default function Menu() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: "#fff" }} />
      <View
        style={{
          backgroundColor: "#fff",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
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
