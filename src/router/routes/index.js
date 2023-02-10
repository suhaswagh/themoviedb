import { lazy } from "react";

const AppRoutes = [
  {
    path: "*",
    component: lazy(() => import("../../pages/404")),
    type: "open",
  },
  {
    path: "/",
    component: lazy(() => import("../../pages/home")),
    type: "private",
  },
  {
    path: "/login",
    component: lazy(() => import("../../pages/auth")),
    type: "open",
  },
];

export default AppRoutes;
