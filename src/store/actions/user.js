import actionTypes from "../../constants/actionTypes";
import servicesConst from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";

const userInfoAction = (payload) => ({
    type: userTypes.USERINFO,
    payload,
  });

const userInfoServiceAction = () => async (dispatch) => {
  call({
    url: servicesConst.serviceEndpoints.USER_INFO,
    method: servicesConst.serviceMethods.GET,
  }).then((res) => {
    dispatch(userInfoAction(res))
    // console.log("Response", res);
  });
};

export default {
  userInfoServiceAction,
};
