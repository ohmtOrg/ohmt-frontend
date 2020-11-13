import React from 'react';
import PropTypes from 'prop-types';
import { Card,Button } from '@material-ui/core';
import history from "history.js";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';




export default function MainFeaturedPost(props) {
  const handleLogin=()=>{
    history.push({
      pathname: "/session/signin"
    });
  }

  return (
   
     <Card className="p-sm-24 mb-6">
     <Card elevation={0} className="upgrade-card p-sm-24 bg-paper">
        <Grid container spacing={4}>
            {/* {featuredPosts.map((post) => ( */}
                <Grid item md={6}>
                  <div className="play-card p-sm-24 bg-paper">
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      One Health Monitoring Tool
                    </Typography>
                 
                  </div>
                </Grid>
                <Grid item md={6}>
                <img src="/assets/images/welcomeohmt.jpg" alt="upgrade" />
                </Grid>
            
            {/* ))} */}
          </Grid>
       
       {/* <p className="text-muted m-0 py-4">
         <b>One Health</b>  <br /> Monitoring Tool
       </p> */}
       {/* <Button
         className="uppercase"
         size="large"
         variant="contained"
         color="primary"
         onClick={handleLogin}
       >
         Sign In 
       </Button> */}
     </Card>
   </Card>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};