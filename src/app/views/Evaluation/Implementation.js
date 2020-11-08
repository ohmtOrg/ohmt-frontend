import React, { Component } from "react";
import { Breadcrumb } from "matx";
import SimpleForm from "../material-kit/forms/SimpleForm";
import { Card } from "@material-ui/core";

const implem=()=> {

    const subcateg=[
        {name:"Institutional capacity development",id:21,value:1},
          {name:"Workforce and technical capacity development",id:22,value:1},
          {name:"One Health prirorities  ",id:23,value:1}
      ]

    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Forms", path: "/forms" },
              { name: "Basic" }
            ]}
          />
        </div>
        <Card className="px-6 pt-2 pb-4"><SimpleForm /></Card>
      </div>
    );
 
}

export default implem;
