import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import PrivateRoute from "./routes/privateRoute";
import Spinner from "../components/elements/loader";

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {AppRoutes?.map((route, index) => {
            if (route.type === "private") {
              return (
                <Route element={<PrivateRoute />} key={route.path + index}>
                  <Route
                    key={route.path + index}
                    exact
                    path={route.path}
                    element={<route.component {...route.props} />}
                  />
                </Route>
              );
            } else {
              return (
                <Route
                  key={route.path + index}
                  exact
                  path={route.path}
                  element={<route.component {...route.props} />}
                />
              );
            }
          })}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
