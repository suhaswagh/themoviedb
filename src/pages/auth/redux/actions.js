import { actionTypes } from "./types";

export const setLoading = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING,
    });
  };
};

export const setAuthenticated = (value) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SET_IS_AUTHENTICATED,
      payload: value,
    });
  };
};

export const setCredentials = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: true,
    });
    dispatch({
      type: actionTypes.SET_CREDENTIALS,
      email,
      password,
    });
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: false,
    });
  };
};

export const setLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOGOUT,
    });
  };
};
