// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import SignUp from "../screens/sign-up";
import Routes from "./router";

const Stack = createStackNavigator();
const NotAuthenticated = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default NotAuthenticated;
