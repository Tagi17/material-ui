import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const Projects = () => {
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
            <div className={classes.centerText}>
                <Typography className={classes.myText}>
                    ShuttleTracker: 
                </Typography>
            </div>
        </ThemeProvider>
    )
};

export default Projects;