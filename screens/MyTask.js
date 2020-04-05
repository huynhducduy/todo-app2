import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, ListItem, Overlay, Avatar } from "react-native-elements";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Calendar } from "react-native-calendars";

const initialLayout = { width: Dimensions.get("window").width };

export default function MyTask() {
  const [index, setIndex] = React.useState(0);
  const [isVisible, setVisible] = React.useState(false);

  const [routes] = React.useState([
    { key: "first", title: "Today" },
    { key: "second", title: "Month" },
  ]);

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#fff" }} />
  );

  const SecondRoute = () => {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Calendar
            markedDates={{
              "2020-04-16": {
                marked: true,
                dotColor: "#F96060",
              },
              "2020-04-17": { marked: true, dotColor: "#F96060" },
              "2020-04-18": {
                marked: true,
                dotColor: "#F96060",
                activeOpacity: 0,
              },
            }}
            hideArrows={true}
          />
        </View>
        <View style={{ flex: 1, padding: 20, backgroundColor: "#FDFDFD" }}>
          <Text style={{ fontFamily: "ABeeZee-Regular", opacity: 0.7 }}>
            TODAY, AUG 4/2020
          </Text>
          <View
            style={{ overflow: "hidden", paddingBottom: 10, marginTop: 15 }}
          >
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
          <View
            style={{ overflow: "hidden", paddingBottom: 10, marginTop: 10 }}
          >
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
              onPress={() => setVisible(true)}
            />
          </View>
        </View>
      </>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

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
          Work List
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
            style={{ backgroundColor: "#F96060" }}
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
      <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(0, 0, 0, .5)"
        overlayBackgroundColor="#fff"
        width="90%"
        height="75%"
        onBackdropPress={() => setVisible(false)}
      >
        <>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 10,
              left: 15,
            }}
            onPress={() => setVisible(false)}
          >
            <Ionicons name="md-close" size={25} color="#000" />
          </TouchableOpacity>
          <Ionicons
            name="md-settings"
            size={25}
            color="#000"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          />
          <View style={{ marginTop: 50, padding: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: "ABeeZee-Regular" }}>
              Meeting according with design team in Central Park
            </Text>
            <ListItem
              title="Assigned to"
              titleStyle={{
                fontFamily: "ABeeZee-Regular",
                fontSize: 16,
                opacity: 0.4,
              }}
              subtitle="Stephen Chow"
              subtitleStyle={{ fontSize: 18, fontFamily: "ABeeZee-Regular" }}
              leftAvatar={{
                source: require("../assets/images/avatars/1.png"),
              }}
              bottomDivider
              style={{
                marginTop: 20,
              }}
            />
            <ListItem
              title="Due date"
              titleStyle={{
                fontFamily: "ABeeZee-Regular",
                fontSize: 16,
                opacity: 0.4,
              }}
              subtitle="Aug 5, 2018"
              subtitleStyle={{ fontSize: 18, fontFamily: "ABeeZee-Regular" }}
              leftIcon=<Ionicons
                name="md-calendar"
                size={25}
                color="#000"
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: -20,
                  opacity: 0.4,
                }}
              />
              bottomDivider
            />
            <ListItem
              title="Description"
              titleStyle={{
                fontFamily: "ABeeZee-Regular",
                fontSize: 16,
                opacity: 0.4,
              }}
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing. "
              subtitleStyle={{ fontSize: 17, fontFamily: "ABeeZee-Regular" }}
              leftIcon=<Ionicons
                name="ios-filing"
                size={25}
                color="#000"
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: -40,
                  opacity: 0.4,
                }}
              />
              bottomDivider
            />
            <ListItem
              title="Member"
              titleStyle={{
                fontFamily: "ABeeZee-Regular",
                fontSize: 16,
                opacity: 0.4,
              }}
              subtitle={
                <>
                  <View style={{ marginTop: 5, flexDirection: "row" }}>
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
                </>
              }
              subtitleStyle={{ fontSize: 17, fontFamily: "ABeeZee-Regular" }}
              leftIcon=<Ionicons
                name="md-people"
                size={25}
                color="#000"
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: -40,
                  opacity: 0.4,
                }}
              />
              bottomDivider
            />
            <ListItem
              title="Tag"
              titleStyle={{
                fontFamily: "ABeeZee-Regular",
                fontSize: 16,
                opacity: 0.4,
              }}
              subtitle=<Button
                type="clear"
                title="Personal"
                titleStyle={{ fontFamily: "ABeeZee-Regular", color: "#6074F9" }}
                containerStyle={{}}
                buttonStyle={{
                  marginTop: 5,
                  width: 100,
                  borderWidth: 1,
                  borderColor: "#E8E8E8",
                  borderRadius: 5,
                }}
              />
              subtitleStyle={{ fontSize: 17, fontFamily: "ABeeZee-Regular" }}
              leftIcon=<Ionicons
                name="md-pricetag"
                size={25}
                color="#000"
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: -45,
                  opacity: 0.4,
                }}
              />
            />
            <Button
              title="Complete Task"
              titleStyle={{ fontFamily: "ABeeZee-Regular" }}
              containerStyle={{
                marginTop: 20,
                width: "100%",
              }}
              buttonStyle={{
                marginBottom: 20,
                backgroundColor: "#6074F9",
              }}
              onPress={() => setVisible(false)}
            />
            <Text
              style={{
                fontFamily: "ABeeZee-Italic",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Comment{" "}
              <Ionicons
                name="md-arrow-dropdown"
                size={20}
                color="#000"
                style={{
                  opacity: 0.3,
                }}
              />
            </Text>
          </View>
        </>
      </Overlay>
    </>
  );
}
