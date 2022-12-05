import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import SignUp from "../screens/sign-up";
import Routes from "./router";
import { Color } from "../utils/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import Profile from "../screens/profile";
import OrderHistory from "../screens/order-history";
import OrderMedicine from "../screens/order-medicine";
import orderDetails from "../screens/order-details";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Authenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"MainScreen"} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

const OrderHistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Color.PRIMARY,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={Routes.OrderHistory}
        component={OrderHistory}
        options={{ title: "Order History" }}
      />
      <Stack.Screen
        name={Routes.OrderDetails}
        component={orderDetails}
        options={{ title: "Order Details" }}
      />
    </Stack.Navigator>
  );
};
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: Color.PRIMARY_DARK,
        inactiveTintColor: Color.BLACK,
        labelStyle: { marginBottom: 20 },
        headerStyle: {
          backgroundColor: Color.PRIMARY,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name={Routes.OrderMedicine}
        component={OrderMedicine}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="medical-bag"
              color={color}
              size={size}
            />
          ),
          title: "Create Medicine Order",
        }}
      />
      <Tab.Screen
        name={Routes.OrderHistoryStack}
        component={OrderHistoryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="md-calendar-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="person-circle-outline" size={size} color={color} />
          ),
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};
export default Authenticated;
