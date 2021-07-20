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

import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";

let colo = [red[200], grey[200], green[200], indigo[200]];

const Dashboard1 = (props) => {
  useEffect(() => {
    console.log("component mounted sucessfully");
    getReports();
  }, []);

  let { theme, getReports, reports } = props;

  return (
    <Fragment>
      <div className="pb-24 pt-7 px-8 bg-primary">
        <MapChart />
        {/* <div className="card-title capitalize text-white mb-4 text-white-secondary">
            Last 12 months Assesment average score
          </div>
          <ModifiedAreaChart
            height="280px"
            option={{
              series: [
                {
                  data: [2, 4, 3.2, 1, 3.5, 2.8, 4, 1, 3, 3.3, 4, 3.8],
                  type: "line"
                }
              ],
              xAxis: {
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec"
                ]
              }
            }}
          ></ModifiedAreaChart> */}
      </div>

      <div className="analytics m-sm-30 mt--18">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            {/* <StatCards /> */}
            {/* <StatCards2 /> */}
            {/* Top Selling Products */}
            <TableCard reports={reports} />

            {/* <MapChart/> */}

            {/* <h4 className="card-title text-muted mb-4">Ongoing Projects</h4>
              <RowCards /> */}
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
                  // theme.palette.primary.dark,
                  // theme.palette.primary.main,
                  // theme.palette.primary.light
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
                  // theme.palette.primary.dark,
                  // theme.palette.primary.main,
                  // theme.palette.primary.light
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
  // setUser: PropTypes.func.isRequired
  reports: state.reports.reports,
  getReports: PropTypes.func.isRequired,
});
export default withStyles(
  {},
  { withTheme: true }
)(withRouter(connect(mapStateToProps, { getReports })(Dashboard1)));
