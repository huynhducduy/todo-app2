import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Button } from "react-native-elements";

export default function NewTask({ navigation }) {
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
          New Task
        </Text>
        <Button
          type="clear"
          icon={<Ionicons name="md-arrow-back" size={25} color="#fff" />}
          containerStyle={{
            position: "absolute",
            left: 5,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
}
