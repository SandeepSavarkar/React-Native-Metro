import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../router/router";
import NotAuthenticated from "./non-authenticated";
import Authenticated from "./authenticated";
import SplashScreen from "../screens/splashScreen/index";
import navigationRef from '../utils/commonUtils';
const Stack = createStackNavigator();
export default function RootNavigator() {
  const { navigationRef: ref } = navigationRef;
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
        <Stack.Screen
          name={Routes.notAuthenticated}
          component={NotAuthenticated}
        />
        <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
