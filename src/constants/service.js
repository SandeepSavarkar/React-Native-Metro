const serviceEndpoints = {
  CHECK: 'check',
  REGISTER:'register',
  LOGIN:'login',
  CHANGE_PASSWORD :'changepassword',
  ADD_ORDER:'addOrder',
  ORDER_HISTROY:'getOrderData',
  LOGOUT:'logout'
};

const serviceMethods = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export { serviceEndpoints, serviceMethods };
