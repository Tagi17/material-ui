import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { MemoryRouter, Link as RouterLink } from 'react-router-dom';

import About from "./About";
import Art from "./Art";
import Articles from "./Articles";
import { NavLink } from "react-router-dom";
import Projects from "./Projects";
import PropTypes from 'prop-types';
import React from 'react';
import Stack from '@mui/material/Stack';
import { StaticRouter } from 'react-router-dom/server';
import useStyles from './styles';

const ResponsiveAppBar = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
    return (
        <>
        <BrowserRouter>
            <AppBar position="sticky" color="primary">
                <Toolbar >
                    <div className={classes.buttons}>
                        <Link to="/Art" className="navlink">
                        <Stack spacing={2}  sx={{ flexGrow: 1 }}>
                        <Button color="inherit" size="large" variant="text">ART</Button>
                        </Stack>
                        </Link>  
                        <Stack spacing={2}  sx={{ flexGrow: 1 }}>
                        <Link to="/Articles" className="navlink">
                        <Button size="large" variant="text">ARTICLES</Button>
                        </Link>
                        </Stack>
                        <Link to="/Projects" className="navlink">
                        <Button size="large" variant="text">PROJECTS</Button>
                        </Link>
                        <Link to="/About" className="navlink">
                        <Button size="large" variant="text"> ABOUT</Button>
                        </Link>
                    </div>

                 </Toolbar>
            </AppBar>
        </BrowserRouter>
        </>
    );
}
export default ResponsiveAppBar;