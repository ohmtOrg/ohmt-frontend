import React, { Fragment,useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import Chart from '../Evaluation/chart';
import { AddImpFeedback } from "../../redux/actions/PerformamceAction";
import ResultChart from './chart'

const ImpRes = props => {
  
    let {impl , AddImpFeedback } = props;
    // const [gover,setGov]=useState([gov])
    // const [impl,setImp]=useState([imp])

    console.log(props)


  return (
    <Fragment>
      <ResultChart impl={impl} ll='Implementation and performance' submitFeedback={AddImpFeedback}/>
      {/* <Chart valu={impl} ll='Implementation and performance' />  */}
    </Fragment>
  );
};

ImpRes.propTypes = {
    AddImp: PropTypes.func.isRequired,
  gov: PropTypes.object.isRequired,
  impl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    AddImpFeedback: PropTypes.func.isRequired,
  gov: state.performance.gov,
  impl: state.performance.impl
});

export default withRouter(
  connect(mapStateToProps, {
    AddImpFeedback
  })(ImpRes)
);