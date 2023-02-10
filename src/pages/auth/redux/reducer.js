import { actionTypes } from "./types";

const INITIAL_STATE = {
  loading: false,
  isAuthenticated: false,
  email: "",
  password: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  // console.log({state, action})
  switch (type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case actionTypes.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: payload,
      };
    case actionTypes.SET_CREDENTIALS:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    case actionTypes.SET_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        email: "",
        password: "",
      };

    default:
      return state;
  }
};

export default reducer;
