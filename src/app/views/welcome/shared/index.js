import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from "history.js";

import Header from './Header';
import MainFeaturedPost from './main';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));



const mainFeaturedPost = {
  title: 'Welcome to One Health Monitoring Tool',
  description:
    "This One Health Monitoring Tool (OHMT) is aiming of assessment progress made in OH implementation by identifying strenghtens, gaps at national, sub-regional and regional levels.This is also a repository tool of all exixting OH tools, which will be an entry point whic will be used advising for any users to identify which of the existing tools of OH",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: "Tool's composition",
    date: 'Nov 12',
    description:
      'this tool is composed of: 2 domaines, 6 categories and 26 sub-categories. Domains are groups of categories that pertain to a broad sub-category of actions intended to improve one health',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Scoring',
    date: 'Nov 11',
    description:
      'The individual (s) conducting the self-assessment assigns a score (1-4) into the OHMT scoring grid , by assigning a score (1-4) to each of the 26 sub-categories',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];




export default function Welcome() {
  const classes = useStyles();
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog"  />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
                <Grid item md={6}>
                  <div className="play-card p-sm-24 bg-paper">
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      {post.description}
                    </Typography>
                    <Link variant="subtitle1" href="#">
                      {post.linkText}
                    </Link>
                  </div>
                </Grid>
            
            ))}
          </Grid> */}
         
        </main>
      </Container>
    </React.Fragment>
  );
}