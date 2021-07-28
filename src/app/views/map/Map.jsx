import React, { useState, useEffect, Fragment } from "react";
import { getReports } from "../../redux/actions/ReportAction";
import "leaflet/dist/leaflet.css";
import "./map.css";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";

const map = document.getElementById("svgMap");
const MyMap = (props) => {
  map.style.display = "block";
  const reports = props.reports;
  const vals =
    reports.length > 0
      ? reports.reduce((o, key) => ({
          ...o,
          [key.author[0].countryCode]: { report: 1 },
        }))
      : {};

  console.log(vals);
  new svgMap({
    targetElementID: "svgMap",
    data: {
      data: {
        report: {
          name: "Completed report assessment:",
          format: "{0} / 1",
          thresholdMax: 1,
          thresholdMin: 0,
        },
      },
      applyData: "report",
      values: vals,
    },
  });

  return (
    <Fragment>
      <div id="svgMap"></div>
    </Fragment>
  );
};

export default MyMap;
