import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const Contact = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
        </ThemeProvider>
    )
};
export default Contact;