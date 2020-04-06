import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Button, ListItem } from "react-native-elements";

export default function Profile() {
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
          Profile
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
      <View
        style={{
          margin: 15,
          marginTop: 30,
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
      >
        <Ionicons
          name="md-settings"
          size={25}
          color="#000"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
        />
        <ListItem
          title="Huynh Duc Duy"
          titleStyle={{
            fontFamily: "ABeeZee-Regular",
            fontSize: 22,
          }}
          subtitle="huynhducduy219@gmail.com"
          subtitleStyle={{
            fontSize: 15,
            fontFamily: "ABeeZee-Regular",
            opacity: 0.6,
          }}
          leftAvatar={{
            source: require("../assets/images/avatars/1.png"),
          }}
          style={{
            margin: 10,
          }}
        />
        <View style={{ flexDirection: "row", marginTop: -15 }}>
          <ListItem
            title="120"
            titleStyle={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 22,
            }}
            subtitle="Tasks created"
            subtitleStyle={{
              fontSize: 15,
              fontFamily: "ABeeZee-Regular",
              opacity: 0.6,
            }}
            style={{
              padding: 10,
              paddingTop: 0,
              width: "50%",
            }}
          />
          <ListItem
            title="80"
            titleStyle={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 22,
            }}
            subtitle="Tasks completed"
            subtitleStyle={{
              fontSize: 15,
              fontFamily: "ABeeZee-Regular",
              opacity: 0.6,
            }}
            style={{
              padding: 10,
              paddingTop: 0,
              width: "50%",
            }}
          />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}
      >
        <View style={{}}>
          <ListItem
            title="Personal"
            titleStyle={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              color: "#fff",
            }}
            subtitle="12 tasks"
            subtitleStyle={{
              fontSize: 15,
              fontFamily: "ABeeZee-Regular",
              color: "#fff",
              opacity: 0.6,
            }}
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#6074F9",
            }}
            containerStyle={{
              backgroundColor: "#6074F9",
            }}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <ListItem
            title="Teamworks"
            titleStyle={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              color: "#fff",
            }}
            subtitle="12 tasks"
            subtitleStyle={{
              fontSize: 15,
              fontFamily: "ABeeZee-Regular",
              color: "#fff",
              opacity: 0.6,
            }}
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#F96060",
            }}
            containerStyle={{
              backgroundColor: "#F96060",
            }}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <ListItem
            title="Home"
            titleStyle={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              color: "#fff",
            }}
            subtitle="12 tasks"
            subtitleStyle={{
              fontSize: 15,
              fontFamily: "ABeeZee-Regular",
              color: "#fff",
              opacity: 0.6,
            }}
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#5ABB56",
            }}
            containerStyle={{
              backgroundColor: "#5ABB56",
            }}
          />
        </View>
        <View style={{ marginLeft: 15, marginRight: 30 }}>
          <ListItem
            title="Meet"
            titleStyle={{
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              color: "#fff",
            }}
            subtitle="12 tasks"
            subtitleStyle={{
              fontSize: 15,
              fontFamily: "ABeeZee-Regular",
              color: "#fff",
              opacity: 0.6,
            }}
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#E42B6A",
            }}
            containerStyle={{
              backgroundColor: "#E42B6A",
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}
