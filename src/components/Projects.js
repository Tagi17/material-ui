import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const Projects = () => {
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
            <div >
                <Typography className={classes.myText}>
                    Smart Dashboard: An all in one tracker for your finances in the Web3 space (WIP) <br />
                </Typography>
                <Typography className={classes.mySmolText}>
                    (put after i put vid) Interacting with smart contract functions and triggering Metamask  <br />
                    Display on chain data from test transaction on the project (display image) <br />
                </Typography>
            </div>
        </ThemeProvider>
    )
};

export default Projects;