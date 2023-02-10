import { createSelector } from "reselect";

export const selectAuth = (state) => state.auth;

export const selectLoading = createSelector(
  [selectAuth],
  (auth) => auth.loading
);

export const selectIsAuthenticated = createSelector(
  [selectAuth],
  (auth) => auth.isAuthenticated
);

export const selectEmail = createSelector([selectAuth], (auth) => auth.email);

export const selectPassword = createSelector(
  [selectAuth],
  (auth) => auth.password
);
