import React from "react";

const ResultRoutes = [
    {
      path: "/result/governance",
      component: React.lazy(() => import("./Gov"))
    },
    {
      path: "/result/implementatiom",
      component: React.lazy(() => import("./Emp"))
    }
  ];
  
  export default ResultRoutes;