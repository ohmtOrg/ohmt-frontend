import React from "react";

const EvaluationRoutes = [
    {
      path: "/evaluation/governance",
      component: React.lazy(() => import("./Governance"))
    },
    {
      path: "/evaluation/implementatiom",
      component: React.lazy(() => import("./Implementation"))
    },
    {
      path: "/evaluation/graph",
      component: React.lazy(() => import("./graphs"))
    }
  ];
  
  export default EvaluationRoutes;
  