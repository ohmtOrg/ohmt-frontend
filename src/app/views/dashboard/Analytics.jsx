import React, { useEffect, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";

import DoughnutChart from "../charts/echarts/Doughnut";
import PropTypes from "prop-types";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import MapChart from "./shared/geoChart";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";
import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import { connect } from "react-redux";
import { getReports } from "../../redux/actions/ReportAction";
import { withRouter } from "react-router-dom";

let colo = [red[200], grey[200], green[200], indigo[200]];

const map = document.getElementById("svgMap");

const Dashboard1 = (props) => {
  
  map.style.display = "none";
  useEffect(() => {
    getReports();
  }, []);

  let { theme, getReports, reports } = props;

  return (
    <Fragment>
      <div className="pb-24 pt-7 px-8 bg-primary" style={{ width: "100%", height: "40%"}}>
        <MapChart reports={reports} />
      </div>

      <div className="analytics m-sm-30 mt--18" style={{zIndex: 4}}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <TableCard reports={reports} />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="px-6 py-4 mb-6">
              <div className="card-title">Score Rate Based on Region</div>
              <div className="card-subtitle">Last 30 days</div>
              <DoughnutChart
                height="300px"
                color={[
                  colo[0],
                  colo[1],
                  colo[2],
                  colo[3],
                ]}
              />
            </Card>
            <Card className="px-6 py-4 mb-6">
              <div className="card-title">Score Rate</div>
              <div className="card-subtitle">Last 30 days</div>
              <DoughnutChart
                height="300px"
                color={[
                  colo[0],
                  colo[1],
                  colo[2],
                  colo[3],
                ]}
              />
            </Card>

            <UpgradeCard />
            {/* 
              <Campaigns /> */}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  reports: state.reports.reports,
  getReports: PropTypes.func.isRequired,
});
export default withStyles(
  {},
  { withTheme: true }
)(withRouter(connect(mapStateToProps, { getReports })(Dashboard1)));
