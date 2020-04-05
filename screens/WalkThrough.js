import * as React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { Button } from "react-native-elements";

export default function WalkThrough({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../assets/images/walkthrough/boarding.png")}
            style={{
              marginTop: 50,
            }}
          />
          <View stlye={{ alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "ABeeZee-Regular",
                textAlign: "center",
                fontSize: 25,
                marginBottom: 10,
                marginTop: -120,
              }}
            >
              Welcome to Sen
            </Text>
            <Text
              style={{
                fontFamily: "ABeeZee-Italic",
                marginBottom: -20,
              }}
            >
              Whats going to happen tomorrow?
            </Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 50 }}>
            <Button
              title="Get Started"
              titleStyle={{ fontFamily: "ABeeZee-Regular", color: "#000" }}
              containerStyle={{
                width: 350,
              }}
              buttonStyle={{
                marginBottom: 20,
                backgroundColor: "#fff",
              }}
              onPress={() => navigation.navigate("SignUp")}
            />
            <Button
              title="Log In"
              type="clear"
              titleStyle={{ fontFamily: "ABeeZee-Regular", color: "#fff" }}
              containerStyle={{
                width: "90%",
              }}
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
          <Image
            source={require("../assets/images/walkthrough/bottom.png")}
            style={{
              position: "absolute",
              justifyContent: "center",
              width: 450,
              height: 350,
              bottom: -50,
              zIndex: -1,
            }}
          ></Image>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#F96060" }}
      ></SafeAreaView>
    </>
  );
}
