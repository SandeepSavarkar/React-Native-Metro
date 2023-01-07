import userTypes from "../../constants/userTypes";

const initialState = {
  order: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.ORDERINFO:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
