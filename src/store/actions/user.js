import { serviceEndpoints, serviceMethods } from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";

const userInfoAction = (payload) => ({
  type: userTypes.USERINFO,
  payload,
});

const userLoginAction = (params) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.LOGIN,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    if (res.success) {
      let result = res.data;
      delete result.token;
      dispatch(userInfoAction(result));
    }
  });
};

const userRegisterAction = (params) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.REGISTER,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    if (res.success) {
      let result = res.data;
      delete result.token;
      dispatch(userInfoAction(result));
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
  userRegisterAction
};
