import React, { Fragment, useState } from "react";
// import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Paper,
  Icon,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import history from "history.js";
import Govern from './Gov'
import Implem from './Emp'
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chart from '../Evaluation/chart';
import Dialog from "@material-ui/core/Dialog";
import { AddReport } from "../../redux/actions/PerformamceAction";
import { ToastContainer, toast } from 'react-toastify';

import {
  Box,
  Button,
  Card,
  Grid,
  CardContent,
  CardHeader,
  Divider,
  Container

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { reference } from '../data'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Graphs = props => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = () => {
    console.log("about to submit ")
    AddReport({ impl, gov, govfeedback, impfeedback})
    // history.push({
    //   pathname: "/report"
    // });
  }

  let { impl, gov, govfeedback, impfeedback,ReportError,ReportResult,AddReport  } = props;
  const filtered = gov.filter(e => e.value < 3)


  const filtered2 = impl.filter(e => e.value < 3)

  const fil = [...filtered, ...filtered2]
  console.log(reference)

  reference.map(ob => {

    if (ob.catId < 10) {
      let results = fil.filter(f => ob.catId === parseInt(f.id / 100)).map(obj => {
        return obj.id
      });
      const res2 = results.filter(f => {
        return ob.id
      })
      ob.sc = [...results]

    } else if (ob.catId < 100) {
      let results = fil.filter(f => ob.catId === parseInt(f.id / 10)).map(obj => {
        return obj.id
      });
      ob.sc = [...results]

    }
    else {
      let results = fil.filter(f => ob.catId === parseInt(f.id)).map(obj => {
        return obj.catId
      });
      ob.sc = [...results]

    }
  })
  console.log('ref', reference)


  return (
    <Fragment>

      <div>




        <Card

        >
          <CardHeader
            action={(
              <Button
                endIcon={<ArrowRightIcon />}
                size="small"
                variant="outlined" color="primary"
                onClick={handleClickOpen}
              >
                View Recomended tools
              </Button>
            )}
            title={`Report of the assessment and recomended one health tools to address gaps identified`}
          />
          <Divider />
          <CardContent>

            <Grid
              container
              spacing={3}
            >
              <Fragment>

                <Grid
                  item
                  lg={6}
                  md={12}
                  xs={12}
                >
                  <Govern />
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={12}
                  xs={12}
                >
                  <Implem />
                </Grid>


              </Fragment>
              <Fragment>
                <Grid
                  item
                  lg={6}
                  md={12}
                  xs={12}
                >
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                  >
                    <Box

                      position="relative"
                    >
                      <Chart valu={gov} ll='Governance' />
                    </Box>
                  </Grid>
                  <Divider />

                </Grid>
                <Grid
                  item
                  lg={6}
                  md={12}
                  xs={12}
                >
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                  >
                    <Box

                      position="relative"
                    >
                      <Chart valu={impl} ll='Implementation and performance' />
                    </Box>
                  </Grid>

                  <Divider />

                </Grid>
              </Fragment>
            </Grid>
          </CardContent>

        </Card>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Recomended tools
              </Typography>
              <Button color="inherit" onClick={handleClose}>
                close
              </Button>
            </Toolbar>
          </AppBar>
          <Container>
            <Card elevation={3} className="pt-5 mb-6">
              <div className="card-title px-6 mb-3">Reference tools based on your scoring</div>
              <div className="overflow-auto">

                <Paper className={classes.paper}>
                  <Table className="whitespace-pre">
                    <TableHead>
                      <TableRow>
                        <TableCell className="px-0" colSpan={3}>Title</TableCell>
                        <TableCell className="px-0" colSpan={8}>Description</TableCell>
                        <TableCell className="px-0" colSpan={2}>Link</TableCell>
                        <TableCell className="px-0" colSpan={4}>Reason</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reference.filter(f => f.sc.length > 0).map((rectool, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-0 capitalize" align="left" colSpan={3}>
                            {rectool.title}
                          </TableCell>

                          <TableCell className="px-0 capitalize" colSpan={8}>
                            {rectool.description}
                          </TableCell>
                          <TableCell className="px-0" colSpan={2}>
                            <Button color="secondary" href={rectool.href} target='blank'>
                              Visit
                            </Button>
                          </TableCell>
                          <TableCell className="px-0" colSpan={4}>
                            {((rectool.catId === 1) || (rectool.catId >= 10 && rectool.catId < 20) || (rectool.catId >= 100 && rectool.catId < 200)) && (
                              <Typography >because you scored under 3 in Governance  domain  </Typography>
                            )}
                            {((rectool.catId === 2) || (rectool.catId >= 20 && rectool.catId < 100) || (rectool.catId >= 200 && rectool.catId < 300)) && (
                              <Typography >because you scored under 3 in Implementation and Performance domain </Typography>
                            )}
                          </TableCell>

                        </TableRow>

                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </div>
            </Card>
          </Container>
        </Dialog>
      </div>

      <Divider />
      <Box
        mt={3}
        mb={3}
      >
        <Button
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="outlined" color="secondary"
          // href='/report'
          onClick={handleSubmit}
        >
          Submit Results
        </Button>

        <Button
        variant="contained"
        component="label"
        size="small"
        color="primary"
        className="ml-4"
        >
        Upload File
        <input
         type="file"
         hidden
        />
        </Button>
      </Box>
      {ReportError && (
        <div>
          <ToastContainer />
        </div>
      )}
    </Fragment>
  );
};

Graphs.propTypes = {
  AddImp: PropTypes.func.isRequired,
  gov: PropTypes.object.isRequired,
  impl: PropTypes.object.isRequired,
  Report: PropTypes.object.isRequired,
  AddReport: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  AddReport: PropTypes.func.isRequired,
  gov: state.performance.gov,
  ReportResult: state.reports.report,
  ReportError: state.reports.error,
  impl: state.performance.impl,
  govfeedback: state.performance.govfeedback,
  impfeedback: state.performance.impfeedback,
});

export default withRouter(
  connect(mapStateToProps, {
    AddReport
  })(Graphs)
);

