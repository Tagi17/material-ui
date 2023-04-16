import "./style.css"

import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import { Paper } from '@mui/material';
import React from 'react';
import ThreeScene from './threejschat';
import glow from "./glow.png"
import initThreeAnimation from './threejsnodes';

const Home = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
        <div className={classes.root} >     
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item xs={12} md={5}>
                <Typography style={{ whiteSpace: 'nowrap' }} className={classes.text1} variant='h2'>Blockchain enthusiast</Typography>
              <Typography style={{ whiteSpace: 'nowrap' }} className={classes.myText} >Front end Dev </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className = 'move' >
                  <ThreeScene style={{ zindex: 200}}/>
              </div>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography style={{ whiteSpace: 'nowrap', flexShrink: 0 }} className={classes.myTexttt} >About Me </Typography>
              <br />
              <div className={classes.glowImage}>
                <img src={glow} alt="My PFP" />
              </div>
              <br />
              <Typography style={{ whiteSpace: 'nowrap' }} className={classes.myTextt} >About Me </Typography> 
          </Grid>
        </div>
      </ThemeProvider>
    )
};

export default Home;
