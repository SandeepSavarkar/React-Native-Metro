import AsyncStorage from "@react-native-async-storage/async-storage";
import { serviceEndpoints, serviceMethods } from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";
import commonUtils from "../../utils/commonUtils";
import Routes from "../../router/router";
const userInfoAction = (payload) => ({
  type: userTypes.USERINFO,
  payload,
});

const userLoginAction = (params) => async (dispatch) => {
  call({
    url: serviceEndpoints.LOGIN,
    method: serviceMethods.POST,
    params,
    showMsg: true,
  }).then((res) => {
    if (res.success) {
      let result = res.data;
      AsyncStorage.setItem("token", res.data.token);
      delete result.token;
      AsyncStorage.setItem("user", JSON.stringify(result));
      commonUtils.snackBar({
        message: res.message,
      });
      dispatch(userInfoAction(result));
      commonUtils.navigate({ route: Routes.Authenticated });
    }
  })
};

const userRegisterAction = (params) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.REGISTER,
    method: serviceMethods.POST,
    params,
    showMsg: true,
  }).then((res) => {
    if (res.success) {
      let result = res.data;
      AsyncStorage.setItem("token", res.data.token);
      delete result.token;
      dispatch(userInfoAction(result));
      debugger;
      AsyncStorage.setItem("user", JSON.stringify(result));
      commonUtils.navigate({ route: Routes.Authenticated });
    }
  });
};

const serverCheck = () => async (dispatch) => {
  call({
    url: "check",
    method: serviceMethods.GET,
  }).then((res) => {
    // dispatch(userInfoAction(res));
    // console.log("Response", res);
  });
};

export default {
  userLoginAction,
  serverCheck,
  userRegisterAction,
  userInfoAction,
};
