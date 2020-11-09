import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  
  Grid,
} from '@material-ui/core';
import {Radar} from 'react-chartjs-2';

const Chart = ({ valu,ll,...rest }) => {
  
    let lbls=valu.map(a=>a.name)
    let points=valu.map(a=>a.value)
    var options = {
      scale: {
          ticks: {
            min:1,
            max:4,
            beginAtZero:true,
            stepSize: 1
          }
      }
  };
    let dtst=[{
      label: ll,
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data:[...points]
    }]
    let data={labels:[...lbls],datasets:[...dtst]}

  return (
    <
    > 
<Grid
          container
          spacing={6}
        >
    <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
    <Radar data={data}  options={options}/>
    </Grid>
    
        </Grid>
      
    </>
  );
};

Chart.propTypes = {
  ll: PropTypes.string,
  valu:PropTypes.object
};

export default Chart;