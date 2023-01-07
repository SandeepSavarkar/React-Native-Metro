import actionTypes from "../../constants/actionTypes";

const initialState = {
  count: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADER_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
