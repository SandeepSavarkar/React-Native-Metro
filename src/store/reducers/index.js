import { combineReducers } from "redux";
import common from "./common";
import user from "./user";
import order from "./order";
import customer from "./customer";

export default combineReducers({
  common,
  user,
  order,
  customer,
});
