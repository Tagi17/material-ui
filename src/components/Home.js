import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';
import ThreeScene from './threejschat';

const Home = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
        <div className={classes.root} >     
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item xs={12} md={5}>
              <Box sx={{ backgroundColor: darkTheme.palette.background.paper }} className={classes.centerText}>
                <Typography style={{ whiteSpace: 'nowrap' }} className={classes.text1} variant='h2'>Blockchain enthusiast</Typography>
              </Box>
              <Typography className={classes.myText} variant="subtitle1" aligned="left">Front end Dev </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative', left: '-10%', backgroundColor: darkTheme.palette.background.paper }} className={classes.centerText}>
                <ThreeScene />
              </Box>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    )
};

export default Home;
