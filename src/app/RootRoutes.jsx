import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
// import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

// import formsRoutes from "./views/forms/FormsRoutes";
// import mapRoutes from "./views/map/MapRoutes";
import evaluationRoutes from "./views/Evaluation/EvaluationsRoutes"
import WelcomeRoutes from "./views/welcome/WelcomeRoutes"

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/guidance" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  // ...dragAndDropRoute,
  // ...formsRoutes,
  ...evaluationRoutes,
  // ...mapRoutes,
  ...WelcomeRoutes,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
