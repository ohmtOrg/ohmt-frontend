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
        <Grid container spacing={4} justify="center">
            {/* {featuredPosts.map((post) => ( */}
              <Grid item md={2} lg={2} sm={2}  justify="center" >
                
                </Grid>
                <Grid item md={8} lg={8} sm={8}  justify="center" >
                  <div className="play-card p-sm-24 bg-paper">
                    <Typography justify="center" component="h1" variant="h3" color="inherit" gutterBottom>
                      One Health Monitoring Tool
                    </Typography>
                 
                  </div>
                </Grid>
                <Grid item md={2} lg={2} sm={2}  justify="center" >
                
                </Grid>
                <Grid item md={9} lg={9} sm={0} >
                  <div className="play-card p-sm-24 bg-paper">
                    
                 
                  </div>
                </Grid>
                <Grid item md={3} lg={3} sm={12} >
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