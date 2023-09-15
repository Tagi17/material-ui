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
            <Grid container wrap="nowrap" >
              <Grid item xs={12} md={6}>
                  <Typography style={{ whiteSpace: 'nowrap' }} className={classes.text1} variant='h2'>Blockchain enthusiast</Typography>
                <Typography style={{ whiteSpace: 'nowrap' }} className={classes.myText} >Front end Dev </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className = 'move' >
                    <ThreeScene style={{ zindex: 200}}/>
                </div>
              </Grid>
            </Grid>
            {/* <Grid container wrap="nowrap" >
              <Grid item xs={12} md={6}>
                  <Typography style={{ whiteSpace: 'nowrap', flexShrink: 0 }} className={classes.myTexttt} >About Me </Typography>
                <Typography style={{ whiteSpace: 'nowrap' }} className={classes.myTextt} > My passion lies in designing and creating purposeful <br/> products that enhance user experience. I was introduced to <br/> the world of programming through Girls Who Code, which <br/> piqued my interest in the field. However, I was uncertain <br/> about which industry I wanted to specialize in until I <br/> discovered Bitcoin. The technology behind it fascinated me <br/> and opened up a new world of possibilities that I am eager <br/> to explore. </Typography> 
            </Grid>
            <Grid item xs={6} md={6}>
              <div className={classes.glowImage}>
                <img src={glow} alt="My PFP" />
              </div>
              </Grid>
            </Grid> */}
        </div>
      </ThemeProvider>
    )
};

export default Home;
