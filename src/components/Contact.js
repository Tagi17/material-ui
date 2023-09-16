import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const Contact = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
        <Typography className={classes.myTextW}>
           Reach out to me at my email: inzhagey@gmail.com 
        </Typography>
        </ThemeProvider>
    )
};
export default Contact;