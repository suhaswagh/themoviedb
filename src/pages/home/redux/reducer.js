import { actionTypes } from "./types";

const INITIAL_STATE = {
  loading: false,
  movieData: [],
  currentLang: "en",
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case actionTypes.SET_MOVIE_DATA:
      return {
        ...state,
        movieData: payload,
      };
    case actionTypes.SET_CURRENT_LANG:
      return {
        ...state,
        currentLang: payload,
      };

    default:
      return state;
  }
};

export default reducer;
