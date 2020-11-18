import React from "react";

const ResultRoutes = [
    // {
    //   path: "/result/governance",
    //   component: React.lazy(() => import("./Gov"))
    // },

    {
      path: "/report",
      component: React.lazy(() => import("../report"))
    },
    // {
    //   path: "/result/implementatiom",
    //   component: React.lazy(() => import("./Emp"))
    // },
    {
      path: "/result",
      component: React.lazy(() => import("./"))
    }
  ];
  
  export default ResultRoutes;