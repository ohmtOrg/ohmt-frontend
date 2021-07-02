import React, { Fragment,useState } from "react";
import history from "history.js";
// import Scrollbar from "react-perfect-scrollbar";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// import { navigations } from "../../navigations";
// import { MatxVerticalNav } from "matx";
// import Chart from '../Evaluation/chart';
import {
  Box,
  Button,
  Grid,
  // Card,
  // CardContent,
  // CardHeader,
  // Divider,
  // colors ,
  // Typography
  
//   makeStyles,
//   colors
} from '@material-ui/core';
// import { AddGovFeedback,AddImpFeedback } from "../../redux/actions/PerformamceAction";
// import ResultChart from './chart'
import Govern from './Gov'
import Implem from './Emp'

const Result = props => {
  
    // let {gov,impl, impfeedback,govfeedback } = props;
    // const [gover,setGov]=useState([gov])
    // const [impl,setImp]=useState([imp])

    // console.log('feedback',govfeedback,impfeedback)
const handleNext=()=>{
  history.push({
    pathname: "/report"
  });
}

  return (
    <Fragment>
      {/* <ResultChart impl={gov} ll='Governance' submitFeedback={AddGovFeedback} fb={performance.govfeedback}/>
      <ResultChart impl={impl} ll='Implementation and performance' submitFeedback={AddImpFeedback} fb={performance.impfeedback}/> */}
 <Grid
              container
              spacing={3}
            >
<Grid
                item
                lg={6}
                md={12}
                xs={12}
              >
      <Govern/>
      </Grid>
      <Grid
                item
                lg={6}
                md={12}
                xs={12}
              >
      <Implem/>
      </Grid>
      </Grid>
      {/* <Chart valu={gov} ll='Governance' />  */}
      <Box 
      mt={3}
      mb={3}
      >
      <Button
            endIcon={<ArrowRightIcon  />}
            size="small"
            variant="outlined" color="primary"
            // href='/report'
            onClick={handleNext}
          >
            Validate and Continue 
          </Button>
          </Box>
    </Fragment>
  );
};
export default Result

// Graphs.propTypes = {
//     AddGovFeedback: PropTypes.func.isRequired,
//     AddImpFeedback: PropTypes.func.isRequired,
//   gov: PropTypes.object.isRequired,
//   impl: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//     AddGovFeedback: PropTypes.func.isRequired,
//     AddImpFeedback: PropTypes.func.isRequired,
//     performance:state.performance,
//   gov: state.performance.gov,
//   impl: state.performance.impl,
//   govfeedback:state.performance.govfeedback,
//   impfeedback:state.performance.impfeedback,
// });

// export default withRouter(
//   connect(mapStateToProps, {
//     AddGovFeedback,AddImpFeedback
//   })(Graphs)
// );