import * as React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function SignUp({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "#fff",
          }}
        >
          <Button
            type="clear"
            icon={
              <Icon
                name="arrow-left"
                size={25}
                color="black"
                type="material-community"
              />
            }
            style={{ marginLeft: 10 }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            backgroundColor: "#fff",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text
            h1
            style={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 30,
              marginTop: 30,
            }}
          >
            Sign Up
          </Text>
          <Text
            h1
            style={{
              fontFamily: "ABeeZee-Italic",
              fontSize: 15,
              marginTop: 10,
              opacity: 0.5,
            }}
          >
            Sign up to continue
          </Text>
          <Input
            containerStyle={{
              marginTop: 60,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            label="Name"
            labelStyle={{
              fontFamily: "ABeeZee-Italic",
              color: "#000",
              fontSize: 20,
            }}
            placeholder="Enter your name"
            inputStyle={{ fontFamily: "ABeeZee-Regular", fontSize: 15 }}
          />
          <Input
            containerStyle={{
              marginTop: 30,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            label="Email"
            labelStyle={{
              fontFamily: "ABeeZee-Italic",
              color: "#000",
              fontSize: 20,
            }}
            placeholder="Enter your email"
            inputStyle={{ fontFamily: "ABeeZee-Regular", fontSize: 15 }}
          />
          <Input
            containerStyle={{
              marginTop: 30,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            label="Password"
            labelStyle={{
              fontFamily: "ABeeZee-Italic",
              color: "#000",
              fontSize: 20,
            }}
            placeholder="Enter your password"
            inputStyle={{ fontFamily: "ABeeZee-Regular", fontSize: 15 }}
            secureTextEntry
          />
          <Button
            title="Sign Up"
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            containerStyle={{
              marginTop: 60,
              width: "100%",
            }}
            buttonStyle={{
              marginBottom: 20,
              backgroundColor: "#F96060",
            }}
            onPress={() => navigation.navigate("Two")}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#fff" }} />
    </>
  );
}
