import React from 'react';
import PropTypes from 'prop-types';
import { Card,Button } from '@material-ui/core';
import history from "history.js";




export default function MainFeaturedPost(props) {
  const handleLogin=()=>{
    history.push({
      pathname: "/session/signin"
    });
  }

  return (
   
     <Card className="p-sm-24 mb-6">
     <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
       <img src="/assets/images/faologo.png" alt="upgrade" />
       <p className="text-muted m-0 py-4">
         {/* <b>MatX PRO</b> for <br /> more resources */}
       </p>
       <Button
         className="uppercase"
         size="large"
         variant="contained"
         color="primary"
         onClick={handleLogin}
       >
         Sign In 
       </Button>
     </Card>
   </Card>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};