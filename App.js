import * as React from "react";
import { StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "react-native-elements";
import { SplashScreen } from "expo";
import * as Font from "expo-font";

import Two from "./screens/Two";
import One from "./screens/One";

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        await Font.loadAsync({
          "ABeeZee-Italic": require("./assets/fonts/ABeeZee-Italic.ttf"),
          "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <NavigationContainer>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="One" component={One} />
              <Stack.Screen name="Two" component={Two} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    );
  }
}
