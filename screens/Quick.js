import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Button } from "react-native-elements";

export default function Quick() {
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
          Personal
        </Text>
        <Button
          type="clear"
          icon={<Ionicons name="ios-options" size={25} color="#fff" />}
          containerStyle={{
            position: "absolute",
            right: 5,
          }}
        />
      </View>
    </>
  );
}
