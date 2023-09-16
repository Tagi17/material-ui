import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';
import glow from "./glow.png"

const About = () => {
    const classes = useStyles(); 
    
    return (
        <ThemeProvider theme={darkTheme}> 
         <CssBaseline /> 
                <Grid container className={classes.gridCenter} justifyContent='center' alignItems='center'>
                    <Grid item xs={12} md={6} className={classes.textG} >
                        <Typography  className={classes.myTextt}> 
                            My passion lies in designing and creating purposeful <br />
                            products that enhance user experience. I was introduced to <br />
                            the world of programming through Girls Who Code, which <br />
                            piqued my interest in the field. However, I was uncertain <br />
                            about which industry I wanted to specialize in until I <br />
                            discovered Bitcoin. The technology behind it fascinated me <br />
                            and opened up a new world of possibilities that I am eager <br />
                            to explore. 
                        </Typography> 
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className={classes.imageG}>
                            <img src={glow} alt="My PFP" />
                        </div>
                    </Grid>
                </Grid>
        </ThemeProvider>
    )
};

export default About;