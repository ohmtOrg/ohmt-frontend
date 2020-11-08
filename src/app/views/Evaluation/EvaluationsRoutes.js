import React from "react";

const formsRoutes = [
    {
      path: "/evaluation/governance",
      component: React.lazy(() => import("./Governance"))
    },
    {
      path: "/evaluation/implementatiom",
      component: React.lazy(() => import("./Implementation"))
    }
  ];
  
  export default formsRoutes;