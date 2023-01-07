import { serviceEndpoints, serviceMethods } from "../../constants/service";
import customerTypes from "../../constants/customerTypes";
import call from "../services";
import commonUtils from "../../utils/commonUtils";
import Routes from "../../router/router";
import { useDispatch } from "react-redux";

const customerInfoAction = (payload) => ({
  type: customerTypes.CUSTOMERINFO,
  payload,
});

const customerDetailAction = (payload) => ({
  type: customerTypes.CUSTOMER_DETAIL,
  payload,
});

const CustomerDetailAction = (dispatch, params) => {
  debugger;
  call({
    url: serviceEndpoints.CUSTOMER_DETAIL,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    debugger;
    if (res.success) {
      console.log("res.success: ", res.data);
      dispatch(customerDetailAction(res.data));
    }
  });
};
const CustomerListAction = (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.CUSTOMER_LIST,
    method: serviceMethods.GET,
  }).then((res) => {
    debugger;
    if (res.success) {
      dispatch(customerInfoAction(res.data));
    }
  });
};

export default {
  CustomerListAction,
  CustomerDetailAction,
};
