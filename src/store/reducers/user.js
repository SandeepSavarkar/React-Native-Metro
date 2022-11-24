import userTypes from "../../constants/userTypes";

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USERINFO:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
