import AsyncStorage from "@react-native-async-storage/async-storage";
import actionTypes from "../../constants/actionTypes";
import serviceEndpoints from "../../constants/service";
import userTypes from "../../constants/userTypes";
import commonUtils from "../../utils/commonUtils";
import call from "../services";

const userInfoAction = (payload) => ({
  type: userTypes.USERINFO,
  payload,
});

const userInfoServiceAction = () => async (dispatch) => {
  call({
    url: serviceEndpoints.user.CHECK,
    method: serviceEndpoints.serviceMethods.GET,
  }).then((res) => {
    // dispatch(userInfoAction(res))
    // console.log("Response", res);
  });
};

const userSignIn = (params) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.user.SIGN_UP,
    method: serviceEndpoints.serviceMethods.POST,
    params,
  }).then((res) => {
    try {
      if (res.success) {
        let data = res.data;
        AsyncStorage.setItem("token", res.data.token);
        delete data.token;
        debugger;
        AsyncStorage.setItem("userData", data);
        commonUtils.snackBar({ message: res.message });
        // commonUtils.navigate({ route: Routes.Authenticated, reset: true });
        debugger;
      }
    } catch (error) {}
    debugger;

    // dispatch(userInfoAction(res))
    // console.log("Response", res);
  });
};

export default {
  userInfoServiceAction,
  userSignIn,
};
