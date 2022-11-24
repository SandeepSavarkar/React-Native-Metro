import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Login from "../screens/login";
import SignUp from "../screens/sign-up";
import Routes from "./router";
import { Color } from "../utils/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import Profile from "../screens/profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Authenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"MainScreen"} component={BottomTabNavigation} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: Color.PRIMARY_DARK,
        inactiveTintColor: Color.BLACK,
        labelStyle: { marginBottom: 10 },
      }}
    >
      {/* <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="md-home-outline" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name={Routes.OrderMedicine}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="medical-bag"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.OrderHistory}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="md-calendar-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Authenticated;
