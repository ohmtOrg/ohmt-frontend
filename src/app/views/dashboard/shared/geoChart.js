import React, {useEffect} from "react";
import { Chart } from "react-google-charts";
import MyMap from "../../map/Map"


const  MapChart=(props)=>{

    const {reports} = props;

    return <MyMap reports={reports}/>
  
}

export default  MapChart
