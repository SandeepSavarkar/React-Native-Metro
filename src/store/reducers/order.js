import userTypes from "../../constants/userTypes";

const initialState = {
  order: [],
};

export default (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case userTypes.ORDERINFO:
      return {
        ...state,
        order:action.payload,
      };
    default:
      return state;
  }
};
