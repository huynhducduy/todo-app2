import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button, ListItem } from "react-native-elements";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const Route = () => {
  return (
    <>
      <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#FDFDFD" }}>
        <Text style={{ fontFamily: "ABeeZee-Regular", opacity: 0.7 }}>
          TODAY, AUG 4/2020
        </Text>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 15 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#6074F9",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle-outline"
              size={25}
              color="#6074F9"
            />
            title="Go fishing with Stephen"
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
          />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 10 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#F96060",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle"
              size={25}
              color="#F96060"
            />
            title="Meet according with design team in..."
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
            onPress={() => {}}
          />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 15 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#6074F9",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle-outline"
              size={25}
              color="#6074F9"
            />
            title="Go fishing with Stephen"
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
          />
        </View>
        <Text
          style={{ fontFamily: "ABeeZee-Regular", opacity: 0.7, marginTop: 15 }}
        >
          TODAY, AUG 4/2020
        </Text>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 15 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#6074F9",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle-outline"
              size={25}
              color="#6074F9"
            />
            title="Go fishing with Stephen"
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
          />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 10 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#F96060",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle"
              size={25}
              color="#F96060"
            />
            title="Meet according with design team in..."
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
            onPress={() => {}}
          />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 15 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#6074F9",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle-outline"
              size={25}
              color="#6074F9"
            />
            title="Go fishing with Stephen"
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
          />
        </View>
        <View style={{ overflow: "hidden", paddingBottom: 10, marginTop: 10 }}>
          <ListItem
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
              borderRightColor: "#F96060",
              borderRightWidth: 4,
            }}
            key={1}
            leftIcon=<Ionicons
              name="ios-checkmark-circle"
              size={25}
              color="#F96060"
            />
            title="Meet according with design team in..."
            titleStyle={{ fontFamily: "ABeeZee-Regular" }}
            subtitle="9:00am"
            subtitleStyle={{ fontFamily: "ABeeZee-Italic", opacity: 0.5 }}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </>
  );
};

const initialLayout = { width: Dimensions.get("window").width };

export default function Quick() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Today" },
    { key: "second", title: "Month" },
  ]);

  const renderScene = SceneMap({
    first: Route,
    second: Route,
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#6074F9" }} />
      <View
        style={{
          backgroundColor: "#6074F9",
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
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: "white",
              width: "25%",
              marginLeft: "10%",
              height: 2.5,
            }}
            style={{ backgroundColor: "#6074F9" }}
            labelStyle={{
              fontFamily: "ABeeZee-Italic",
              textTransform: "capitalize",
              fontSize: 18,
            }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
}
