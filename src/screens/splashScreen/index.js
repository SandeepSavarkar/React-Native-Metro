import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import Routes from "../../router/router";
// import {useNavigation} from '@react-navigation/native';
import commonUtils from "../../utils/commonUtils";
import UserAction from "../../store/actions/user";
import { useDispatch } from "react-redux";
import messaging from "@react-native-firebase/messaging";

const SplashScreen = (props) => {
  const dispatch = useDispatch();
  const getTokenData = () => {
    AsyncStorage.getItem("token").then((token) => {
      if (token) {
        console.log(token, "token");
        AsyncStorage.getItem("user").then((user) => {
          let userData = JSON.parse(user);
          console.log(userData, "userData");
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

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage, "remoteMessage");
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
  });

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
