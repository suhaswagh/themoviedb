import { actionTypes } from "./types";

import { getMovieData } from "../../../config";

export const setLoading = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING,
    });
  };
};

export const getMovieDB = () => {
  return async (dispatch) => {
    try {
      const res = await getMovieData();
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: true,
      });

      if (res) {
        dispatch({
          type: actionTypes.SET_MOVIE_DATA,
          payload: res.data.results,
        });
      }
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    } catch (error) {
      console.error({ error });
    }
  };
};

export const setLanguage = (value) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_CURRENT_LANG,
      payload: value,
    });
  };
};
