import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from "react-native";

import MyTask from "./MyTask";
import Menu from "./Menu";
import Quick from "./Quick";
import Profile from "./Profile";
import NewTask from "./NewTask";

const BottomTab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#292E4E" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          if (route.name == "Add") {
            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  width: "20%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    padding: 10,
                    alignItems: "center",
                    width: 70,
                    height: 70,
                    marginTop: -20,
                    backgroundColor: "#F96060",
                    borderRadius: 70,
                    color: "#fff",
                  }}
                >
                  <Ionicons name={options.icon} size={50} color="#fff" />
                </View>
              </TouchableOpacity>
            );
          } else
            return (
              <TouchableOpacity
                key={route.name}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  padding: 10,
                  alignItems: "center",
                  width: "20%",
                }}
              >
                <Ionicons
                  name={options.icon}
                  size={30}
                  style={{ marginBottom: -3 }}
                  color={isFocused ? "#fff" : "#8E8E93"}
                />
                <Text style={{ color: isFocused ? "#fff" : "#8E8E93" }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
        })}
      </View>
    </SafeAreaView>
  );
}

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <BottomTab.Screen
        name="MyTask"
        component={MyTask}
        options={{
          title: "My Task",
          icon: "ios-checkmark-circle-outline",
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: "Menu",
          icon: "md-apps",
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={NewTask}
        options={{
          title: "Add",
          icon: "md-add",
        }}
      />
      <BottomTab.Screen
        name="Quick"
        component={Quick}
        options={{
          title: "Quick",
          icon: "ios-clipboard",
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          icon: "md-person",
        }}
      />
    </BottomTab.Navigator>
  );
}
