import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Selector from "../../pages/auth/redux/selectors";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(Selector.selectIsAuthenticated);
  const loading = useSelector(Selector.selectLoading);

  return (
    <>{!isAuthenticated && !loading ? <Navigate to="/login" /> : <Outlet />}</>
  );
};

export default PrivateRoute;
