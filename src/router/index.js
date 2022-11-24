import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../router/router";
import NotAuthenticated from "./non-authenticated";
import Authenticated from "./authenticated";

const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Routes.notAuthenticated}
          component={NotAuthenticated}
        />
        <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
