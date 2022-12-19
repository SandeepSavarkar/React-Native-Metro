import { serviceEndpoints, serviceMethods } from "../../constants/service";
import userTypes from "../../constants/userTypes";
import call from "../services";
import commonUtils from "../../utils/commonUtils";
import Routes from "../../router/router";

const orderInfoAction = (payload) => ({ type: userTypes.ORDERINFO, payload });

const addOrderAction = (params) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.ADD_ORDER,
    method: serviceMethods.POST,
    params,
    contentType: true,
  }).then((res) => {
    debugger;
    if (res.success) {
      // let { orderId, orderStatus, medImage, medicines, updatedAt } = res.data;
      // let result = {
      //   orderId,
      //   orderStatus,
      //   medImage,
      //   medicines,
      //   orderTime: updatedAt,
      // };
      // debugger
      // dispatch(orderInfoAction(result));

      commonUtils.navigate({ route: Routes.OrderHistoryStack });
    }
  });
};

const OderHistroyAction = (params) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.ORDER_HISTROY,
    method: serviceMethods.GET,
  }).then((res) => {
    debugger;
    if (res.success) {
      dispatch(orderInfoAction(res.data));
    }
  });
};
const SingleOrderDetail = (params, cb) => async (dispatch) => {
  debugger;
  call({
    url: serviceEndpoints.ORFER_DETAIL,
    method: serviceMethods.POST,
    params,
  }).then((res) => {
    debugger;
    if (res.success) {
      cb(res.data)
      // dispatch(orderInfoAction(res.data));
    }
  });
};

export default {
  addOrderAction,
  OderHistroyAction,
  SingleOrderDetail,
};
