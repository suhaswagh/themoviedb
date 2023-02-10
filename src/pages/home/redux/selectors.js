import { createSelector } from "reselect";

export const selectHome = (state) => state.home;

export const selectLoading = createSelector(
  [selectHome],
  (home) => home.loading
);

export const selectMovieData = createSelector(
  [selectHome],
  (home) => home.movieData
);

export const selectCurrentLang = createSelector(
  [selectHome],
  (home) => home.currentLang
);
