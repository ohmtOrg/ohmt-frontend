import React from "react";
import { authRoles } from "../../auth/authRoles";

const dashboardRoutes = [
  {
    path: "/dashboard/analytics",
    component: React.lazy(() => import("./Analytics")),
    auth: authRoles.normal
  },
  {
    path: "/dashboard/guidance",
    component: React.lazy(() => import("./guidance")),
    auth: authRoles.normal
  },
  {
    path: "/dashboard/definitions",
    component: React.lazy(() => import("./definitions")),
    auth: authRoles.normal
  },
  {
    path: "/dashboard/tools",
    component: React.lazy(() => import("./recomendedTools")),
    auth: authRoles.normal
  }

];

export default dashboardRoutes;
