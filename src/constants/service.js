const serviceEndpoints = {
  CHECK: "check",
  REGISTER: "register",
  LOGIN: "login",
  CHANGE_PASSWORD: "changepassword",
  ADD_ORDER: "addOrder",
  ORDER_HISTROY: "getOrderData",
  CUSTOMER_LIST: "getCustomerList",
  CUSTOMER_DETAIL: "getCustomerDetail",
  LOGOUT:'logout',
  ORDER_DETAIL:'getOrderDetail',
  UPDATE_ORDER :'orderUpdate',
  PROFILE_UPDATE:"updateprofile"

};

const serviceMethods = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export { serviceEndpoints, serviceMethods };
