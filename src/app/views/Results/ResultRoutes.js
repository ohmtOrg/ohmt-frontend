import React from "react";

const ResultRoutes = [
    // {
    //   path: "/result/governance",
    //   component: React.lazy(() => import("./Gov"))
    // },
    
    {
      path: "/singleReport",
      exact: true,
      component: React.lazy(() => import("../report/singleReport"))
    },

    {
      path: "/report",
      exact : true,
      component: React.lazy(() => import("../report"))
    },

    // {
    //   path: "/result/implementatiom",
    //   component: React.lazy(() => import("./Emp"))
    // },
    {
      path: "/result",
      component: React.lazy(() => import("./result2"))
    }
  ];
  
  export default ResultRoutes;
