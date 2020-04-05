import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import { Button, Avatar, Input } from "react-native-elements";

export default function NewTask({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#F96060" }} />
      <View
        style={{
          backgroundColor: "#F96060",
          height: 120,
          justifyContent: "center",
          paddingBottom: 70,
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
            top: 0,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          marginTop: -60,
          marginLeft: 15,
          marginRight: 15,
          height: "100%",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            padding: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              marginRight: 10,
            }}
          >
            For
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F4F4F4",
              borderRadius: 20,
              marginRight: 15,
            }}
          >
            <Avatar
              size="medium"
              rounded
              source={require("../assets/images/avatars/1.png")}
              containerStyle={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontFamily: "ABeeZee-Italic",
                marginLeft: 5,
                marginRight: 15,
                fontSize: 16,
                opacity: 0.8,
              }}
            >
              Stephen...
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              marginRight: 10,
            }}
          >
            In
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F4F4F4",
              borderRadius: 50,
              marginRight: 15,
              height: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "ABeeZee-Italic",
                marginLeft: 20,
                marginRight: 20,
                fontSize: 16,
                opacity: 0.8,
              }}
            >
              Personal
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#F4F4F4", padding: 25 }}>
          <TextInput
            placeholder="Title"
            style={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 20,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 25,
          }}
        >
          <Text
            style={{
              fontFamily: "ABeeZee-Italic",
              fontSize: 16,
              opacity: 0.4,
            }}
          >
            Description
          </Text>
          <View
            style={{
              marginTop: 15,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#EAEAEA",
            }}
          >
            <TextInput
              multiline={true}
              style={{
                fontFamily: "ABeeZee-Regular",
                fontSize: 18,
                opacity: 0.9,
                padding: 20,
                paddingTop: 20,
              }}
            />
            <View
              style={{
                backgroundColor: "#F8F8F8",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderTopWidth: 1,
                borderColor: "#EAEAEA",
              }}
            >
              <Ionicons
                name="md-attach"
                size={25}
                color="#000"
                style={{
                  opacity: 0.4,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#F4F4F4",
            paddingVertical: 15,
            paddingHorizontal: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            Due Date
          </Text>
          <Button
            title="15/8/2018"
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            containerStyle={{
              marginLeft: 15,
            }}
            buttonStyle={{
              padding: 5,
              paddingHorizontal: 15,
              backgroundColor: "#6074F9",
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            padding: 25,
          }}
        >
          <Text
            style={{
              fontFamily: "ABeeZee-Italic",
              fontSize: 18,
              marginRight: 10,
              opacity: 0.8,
            }}
          >
            Add Member
          </Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Avatar
              rounded
              source={require("../assets/images/avatars/2.png")}
              containerStyle={{ marginRight: 5 }}
            />
            <Avatar
              rounded
              source={require("../assets/images/avatars/3.png")}
              containerStyle={{ marginRight: 5 }}
            />
            <Avatar
              rounded
              source={require("../assets/images/avatars/4.png")}
              containerStyle={{ marginRight: 5 }}
            />
            <Avatar
              rounded
              source={require("../assets/images/avatars/5.png")}
              containerStyle={{ marginRight: 5 }}
            />
          </View>
        </View>
        <Button
          title="Add Task"
          titleStyle={{ fontFamily: "ABeeZee-Regular" }}
          containerStyle={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
          }}
          buttonStyle={{
            backgroundColor: "#F96060",
          }}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </>
  );
}
