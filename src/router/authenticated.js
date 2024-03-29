import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import SignUp from "../screens/sign-up";
import Routes from "./router";
import { Color } from "../utils/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Profile from "../screens/profile";
import OrderHistory from "../screens/order-history";
import OrderMedicine from "../screens/order-medicine";
import Customer from "../screens/customer";
import orderDetails from "../screens/order-details";
import orderHistoryAdmin from "../screens/order-history-admin";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import customerDetails from "../screens/customer-details";

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

const OrderHistoryAdminStack = () => {
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
        name={Routes.OrderHistoryAdmin}
        component={orderHistoryAdmin}
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
const CustomerStack = (props) => {
  console.log("props: ", props);
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
      <Stack.Screen name={Routes.Customer} component={Customer} />
      <Stack.Screen
        name={Routes.CustomerDetail}
        component={customerDetails}
        options={{
          title: "Customer Details",
        }}
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
  const users = useSelector((state) => state.user.user);
  let isAdmin = users?.isAdmin;

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
      {!isAdmin && (
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
            tabBarHideOnKeyboard: true,
          }}
        />
      )}
      {!isAdmin && (
        <Tab.Screen
          name={Routes.OrderHistoryStack}
          component={OrderHistoryStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IonIcons name="md-calendar-outline" color={color} size={size} />
            ),
            headerShown: false,
            title: "Order History",
          }}
        />
      )}
      {isAdmin && (
        <Tab.Screen
          name={Routes.OrderHistoryAdminStack}
          component={OrderHistoryAdminStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IonIcons name="md-calendar-outline" size={size} color={color} />
            ),
            headerShown: false,
            title: "Order History",
          }}
        />
      )}
      {isAdmin && (
        <Tab.Screen
          name="Customers List"
          component={CustomerStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="persons" size={size} color={color} />
            ),
          }}
        />
      )}
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
