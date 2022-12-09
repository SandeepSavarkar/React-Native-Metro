import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { Image, View } from "react-native";
import Routes from "../../router/router";
// import {useNavigation} from '@react-navigation/native';
import commonUtils from "../../utils/commonUtils";
import UserAction from "../../store/actions/user";
import { useDispatch } from 'react-redux';
const SplashScreen = (props) => {
  const [initialRoute, setInitialRoute] = useState("");
  const dispatch = useDispatch();
  const getTokenData = () => {
    AsyncStorage.getItem("token").then((token) => {
      if (token) {
        console.log(token,'token');
        AsyncStorage.getItem("user").then((user) => {
          let userData = JSON.parse(user)
          console.log(userData,'userData');
          dispatch(UserAction.userInfoAction(userData));
          commonUtils.navigate({ route: Routes.Authenticated });
        });
      } else {
        commonUtils.navigate({ route: Routes.notAuthenticated });
      }
    });
  };
  useEffect(() => {
    setTimeout(() => {
      getTokenData();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image
        style={{
          width: 300,
          height: 300,
          alignSelf: "center",
          alignItems: "center",
        }}
        source={{
          uri: "https://www.freepnglogos.com/uploads/medicine-logo-png-1.png",
        }}
      />
    </View>
  );
};

export default SplashScreen;
