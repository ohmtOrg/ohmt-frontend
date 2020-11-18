import React, { Fragment,useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import Chart from '../Evaluation/chart';
import { AddGovFeedback,AddImpFeedback } from "../../redux/actions/PerformamceAction";
import ResultChart from './chart'

const Graphs = props => {
  
    let {gov,impl, impfeedback,govfeedback } = props;
    // const [gover,setGov]=useState([gov])
    // const [impl,setImp]=useState([imp])

    console.log('feedback',govfeedback,impfeedback)


  return (
    <Fragment>
      <ResultChart impl={gov} ll='Governance' submitFeedback={AddGovFeedback} fb={govfeedback}/>
      <ResultChart impl={impl} ll='Implementation and performance' submitFeedback={AddImpFeedback} fb={impfeedback}/>
      {/* <Chart valu={gov} ll='Governance' />  */}
    </Fragment>
  );
};

Graphs.propTypes = {
    AddGovFeedback: PropTypes.func.isRequired,
  gov: PropTypes.object.isRequired,
  impl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    AddGovFeedback: PropTypes.func.isRequired,
  gov: state.performance.gov,
  impl: state.performance.impl,
  govfeedback:state.performance.govfeedback,
  impfeedback:state.performance.impfeedback,
});

export default withRouter(
  connect(mapStateToProps, {
    AddGovFeedback
  })(Graphs)
);