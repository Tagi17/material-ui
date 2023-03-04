import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';

import React from 'react';
import useStyles from './styles';

const Home = () => {
    console.log("Home component rendered");
    const classes = useStyles();

    return (
        <ThemeProvider className={classes.homepageBackground}>
            <div className={classes.googleFont}>
                <Typography sx={{ fontFamily: 'VT323'}} aligned="left" variant='h2'>
                    Blockchain enthusiast 
                    </Typography>
                <Typography variant="subtitle1" aligned="left">
                    Front end Dev
                </Typography>
            </div>
        </ThemeProvider>
    )
};

export default Home;