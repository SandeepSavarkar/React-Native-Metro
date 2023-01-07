import customerTypes from "../../constants/customerTypes";
import userTypes from "../../constants/userTypes";

const initialState = {
  customers: [],
  customerDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case customerTypes.CUSTOMERINFO:
      return {
        ...state,
        customers: action.payload,
      };
    case customerTypes.CUSTOMER_DETAIL:
      return {
        ...state,
        customerDetail: action.payload,
      };
    default:
      return state;
  }
};
