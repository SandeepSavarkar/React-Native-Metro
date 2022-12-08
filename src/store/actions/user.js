import AsyncStorage from "@react-native-async-storage/async-storage";
import { serviceEndpoints, serviceMethods } from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";

const userInfoAction = (payload) => ({
  type: userTypes.USERINFO,
  payload,
});

const userLoginAction = (params) => async (dispatch) => {
  call({
    url: serviceEndpoints.LOGIN,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    if (res.success) {
      let result = res.data;
      AsyncStorage.setItem("token", res.data.token);
      delete result.token;
      AsyncStorage.setItem("user", result);
      dispatch(userInfoAction(result));
    }
  });
};

const userRegisterAction = (params) => async (dispatch) => {
  call({
    url: serviceEndpoints.REGISTER,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    if (res.success) {
      let result = res.data;
      delete result.token;
      dispatch(userInfoAction(result));
      AsyncStorage.setItem("token", res.data.token);
      AsyncStorage.setItem("user", result);
    }
  });
};

const serverCheck = () => async (dispatch) => {
  call({
    url: "check",
    method: serviceMethods.GET,
  }).then((res) => {
    dispatch(userInfoAction(res));
    // console.log("Response", res);
  });
};

export default {
  userLoginAction,
  serverCheck,
  userRegisterAction,
};
