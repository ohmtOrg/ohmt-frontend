import React, { Fragment,useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import Chart from './chart';
import { AddImp } from "../../redux/actions/PerformamceAction";

const Graphs = props => {
  
    let {gov,impl , AddImp } = props;
    // const [gover,setGov]=useState([gov])
    // const [impl,setImp]=useState([imp])

    console.log(props)


  return (
    <Fragment>
      <Chart valu={impl} ll='Implementation and performance' /> 
      <Chart valu={gov} ll='Governance' /> 
    </Fragment>
  );
};

Graphs.propTypes = {
    AddImp: PropTypes.func.isRequired,
  gov: PropTypes.object.isRequired,
  impl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    AddImp: PropTypes.func.isRequired,
  gov: state.performance.gov,
  impl: state.performance.impl
});

export default withRouter(
  connect(mapStateToProps, {
    AddImp
  })(Graphs)
);