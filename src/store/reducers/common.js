import actionTypes from "../../constants/actionTypes";

const initialState = {
  count: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
