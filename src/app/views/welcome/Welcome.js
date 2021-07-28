import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
  //   Button,
  // Grid
  } from '@material-ui/core';

  
  import { makeStyles } from "@material-ui/core/styles";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    image: {
      marginTop: 50,
      display: 'inline-block',
      maxWidth: '100%',
      width: 560
    }
  }));
  
  const map = document.getElementById("svgMap");

  const HomeView = () => {
    map.style.display = "none"
    const classes = useStyles();
   

    
  
    return (
      <
      >
        
        <Box
          textAlign="center"
          justifyContent="center"
        >
          <Container >
          <img
                alt="OH Logo"
                className={classes.image}
                src="/assets/images/fao.png"
              />
            
      
            <Typography
              align="center"
              color="textPrimary"
              variant="h1"
            >
              One Health Monitoring Tool (OHMT)
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="subtitle2"
            >
              This One Health Monitoring Tool (OHMT) is a guide to guide the assessment of progress made in OH implementation by identifying strenghtens, gaps at national, sub-regional and regional levels. The tool is intended to be used to collect semi-quantitative data to improve OH. Add the tool kit aspect
            </Typography>
            {/* <Box mt={2}> */}
            {/* <Grid
              container
              spacing={3}
            >
              {guidance.map((p) => (
                <Grid
                  item
                  key={p.id}
                  lg={6}
                  md={6}
                  xs={12}
                >
                  <GuidanceCard
                    className={classes.productCard}
                    guidance={p}
                  />
                </Grid>
              ))}
            </Grid> */}
          {/* </Box> */}
         
          </Container>
        </Box>
      </>
    );
  };
  
  export default HomeView;