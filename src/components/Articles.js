import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const Articles = () => {
    const classes = useStyles(); 
    
    return(
        <ThemeProvider theme={darkTheme}>
        <CssBaseline /> 
        <Typography className={classes.text1}>Read my article on Defi: Provide a short summary overview of what u talked about and link to </Typography>
        </ThemeProvider>
        )
};

export default Articles;