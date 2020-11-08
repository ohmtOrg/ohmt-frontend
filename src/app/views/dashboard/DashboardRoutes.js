import React from "react";
import { authRoles } from "../../auth/authRoles";

const dashboardRoutes = [
  {
    path: "/dashboard/analytics",
    component: React.lazy(() => import("./Analytics")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/guidance",
    component: React.lazy(() => import("./guidance")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/definitions",
    component: React.lazy(() => import("./definitions")),
    auth: authRoles.admin
  }

];

export default dashboardRoutes;
