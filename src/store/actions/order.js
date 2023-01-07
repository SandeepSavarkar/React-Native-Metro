import { serviceEndpoints, serviceMethods } from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";
import commonUtils from "../../utils/commonUtils";
import Routes from "../../router/router";
import actionTypes from "../../constants/actionTypes";

const orderInfoAction = (payload) => ({ type: userTypes.ORDERINFO, payload });
const loaderStartAction = () => ({
  type: actionTypes.LOADER_START,
});
const loaderStopAction = () => ({
  type: actionTypes.LOADER_STOP,
});

const addOrderAction = (params) => async (dispatch) => {
  dispatch(loaderStartAction());
  call({
    url: serviceEndpoints.ADD_ORDER,
    method: serviceMethods.POST,
    params,
    contentType: true,
  }).then((res) => {
    if (res.success) {
      commonUtils.navigate({ route: Routes.OrderHistoryStack });
    }
  });
};

const OderHistroyAction = (params) => async (dispatch) => {
  dispatch(loaderStartAction());

  call({
    url: serviceEndpoints.ORDER_HISTROY,
    method: serviceMethods.GET,
  }).then((res) => {
    dispatch(loaderStopAction());

    if (res.success) {
      dispatch(orderInfoAction(res.data));
    }
  });
};
const SingleOrderDetail = (params, cb) => async (dispatch) => {
  dispatch(loaderStartAction());

  call({
    url: serviceEndpoints.ORDER_DETAIL,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    dispatch(loaderStopAction());

    if (res.success) {
      cb(res.data);
      // dispatch(orderInfoAction(res.data));
    } else {
      cb(false);
    }
  });
};

const UpdateOrder = (params, cb) => async (dispatch) => {
  dispatch(loaderStartAction());

  call({
    url: serviceEndpoints.UPDATE_ORDER,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    dispatch(loaderStopAction());

    if (res.success) {
      cb(res.success);
      commonUtils.snackBar({ message: res.message });
      // dispatch(orderInfoAction(res.data));
    } else {
      cb(false);
    }
  });
};

export default {
  addOrderAction,
  OderHistroyAction,
  SingleOrderDetail,
  UpdateOrder,
};
