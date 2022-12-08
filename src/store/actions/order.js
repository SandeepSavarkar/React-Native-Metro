import { serviceEndpoints, serviceMethods } from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";

const addOrderAction = (params) => async (dispatch) => {
    debugger;
    call({
      url: serviceEndpoints.ADD_ORDER,
      method: serviceMethods.POST,
      params,
      contentType:true
    }).then((res) => {
      debugger
      if (res.success) {
        // let result = res.data;
        // delete result.token;
        // dispatch(userInfoAction(result));
      }
    });
  };


  export default {
    addOrderAction
  };