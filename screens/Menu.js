import * as React from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Overlay, Input, Button } from "react-native-elements";

export default function Menu() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [colorPick, setColor] = React.useState("blue");
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
      <ScrollView style={{ backgroundColor: "#F9F9F9" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: "10%",
            paddingRight: "3%",
            paddingLeft: "3%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "40%",
              padding: "5%",
              backgroundColor: "#fff",
              height: 150,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                borderRadius: 35 / 2,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: "#6074F9",
                  opacity: 0.3,
                  position: "absolute",
                }}
              />
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 25 / 2,
                  backgroundColor: "#6074F9",
                  opacity: 10,
                  zIndex: 1,
                }}
              />
            </View>
            <Text stlye={{ fontFamily: "ABeeZee-Regular" }}>Personal</Text>
            <Text
              style={{
                color: "#9A9A9A",
                marginTop: "5%",
                fontFamily: "ABeeZee-Regular",
              }}
            >
              10 Tasks
            </Text>
          </View>

          <View
            style={{
              width: "40%",
              padding: "5%",
              backgroundColor: "#fff",
              height: 150,
              marginLeft: "10%",
              borderRadius: 8,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                borderRadius: 35 / 2,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: "#E42B6A",
                  opacity: 0.3,
                  position: "absolute",
                }}
              />
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 25 / 2,
                  backgroundColor: "#E42B6A",
                  opacity: 10,
                  zIndex: 1,
                }}
              />
            </View>
            <Text style={{ fontFamily: "ABeeZee-Regular" }}>Teamworks</Text>
            <Text
              style={{
                color: "#9A9A9A",
                marginTop: "5%",
                fontFamily: "ABeeZee-Regular",
              }}
            >
              10 Tasks
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: "10%",
            paddingRight: "3%",
            paddingLeft: "3%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "40%",
              padding: "5%",
              backgroundColor: "#fff",
              height: 150,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                borderRadius: 35 / 2,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: "#F96060",
                  opacity: 0.3,
                  position: "absolute",
                }}
              />
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 25 / 2,
                  backgroundColor: "#F96060",
                  opacity: 10,
                  zIndex: 1,
                }}
              />
            </View>
            <Text style={{ fontFamily: "ABeeZee-Regular" }}>Home</Text>
            <Text
              style={{
                color: "#9A9A9A",
                marginTop: "5%",
                fontFamily: "ABeeZee-Regular",
              }}
            >
              10 Tasks
            </Text>
          </View>

          <View
            style={{
              width: "40%",
              padding: "5%",
              backgroundColor: "#fff",
              height: 150,
              marginLeft: "10%",
              borderRadius: 8,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                borderRadius: 35 / 2,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: "#5ABB56",
                  opacity: 0.3,
                  position: "absolute",
                }}
              />
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 25 / 2,
                  backgroundColor: "#5ABB56",
                  opacity: 10,
                  zIndex: 1,
                }}
              />
            </View>
            <Text style={{ fontFamily: "ABeeZee-Regular" }}>Meet</Text>
            <Text
              style={{
                color: "#9A9A9A",
                marginTop: "5%",
                fontFamily: "ABeeZee-Regular",
              }}
            >
              10 Tasks
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#6074F9",
            width: 80,
            height: 80,
            marginLeft: "7.5%",
            marginTop: "7.5%",
            borderRadius: 6,
          }}
          onPress={() => {
            setIsVisible(true);
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              textAlign: "center",
              paddingTop: 20,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <Overlay
          isVisible={isVisible}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="#fff"
          width="90%"
          height="auto"
          style={{ padding: 20 }}
          onBackdropPress={() => setIsVisible(false)}
        >
          <View style={{ padding: 10 }}>
            <Input
              label="Title"
              labelStyle={{ fontFamily: "ABeeZee-Regular" }}
              inputStyle={{ fontFamily: "ABeeZee-Regular", fontSize: 15 }}
              containerStyle={{ margin: -10, padding: 20 }}
            ></Input>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                fontFamily: "ABeeZee-Regular",
                opacity: 0.7,
              }}
            >
              Choose a color
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#6074F9",
                  height: 50,
                  width: 50,
                  borderRadius: 6,
                  marginRight: 10,
                  paddingTop: 8,
                }}
                onPress={() => {
                  setColor("blue");
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "#fff", textAlign: "center" }}
                >
                  {colorPick === "blue" ? "V" : ""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#E42B6A",
                  height: 50,
                  width: 50,
                  borderRadius: 6,
                  paddingTop: 8,
                  marginRight: 10,
                }}
                onPress={() => {
                  setColor("pink");
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "#fff", textAlign: "center" }}
                >
                  {colorPick === "pink" ? "V" : ""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F4CA8F",
                  height: 50,
                  width: 50,
                  borderRadius: 6,
                  marginRight: 10,
                  paddingTop: 5,
                  marginRight: 10,
                }}
                onPress={() => {
                  setColor("skin");
                }}
              >
                <Text
                  style={{ fontSize: 30, color: "#fff", textAlign: "center" }}
                >
                  {colorPick === "skin" ? "V" : ""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#5ABB56",
                  height: 50,
                  width: 50,
                  borderRadius: 6,
                  marginRight: 10,
                  paddingTop: 8,
                  marginRight: 10,
                }}
                onPress={() => {
                  setColor("green");
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "#fff", textAlign: "center" }}
                >
                  {colorPick === "green" ? "V" : ""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F96060",
                  height: 50,
                  width: 50,
                  borderRadius: 6,
                  marginRight: 10,
                  paddingTop: 8,
                  marginRight: 10,
                }}
                onPress={() => {
                  setColor("orange");
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "#fff", textAlign: "center" }}
                >
                  {colorPick === "orange" ? "V" : ""}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Create"
              titleStyle={{ fontFamily: "ABeeZee-Regular" }}
              buttonStyle={{
                marginBottom: 5,
                marginTop: 20,
                backgroundColor: "#F96060",
              }}
              onPress={() => setIsVisible(false)}
            ></Button>
          </View>
        </Overlay>
      </ScrollView>
    </>
  );
}
