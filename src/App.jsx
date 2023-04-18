import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";

import About from "./components/About";
import Art from './components/Art';
import Articles from "./components/Articles";
import Home from "./components/Home";
import Projects from "./components/Projects";
import React from 'react';
import ResponsiveAppBar from './components/navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import useStyles from './components/styles';

//create functional component
const App = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
 
    return (
        <>
        <CssBaseline  />
        <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <div style={{ position: "relative" }}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Art" element={<Art/>} />
              <Route path="/Articles" element={<Articles/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/About" element={<About/>} /> 
            </Routes>

            <footer className={classes.footer} >
                <Typography className={classes.googleFont} variant="h6" align="center" gutterBottom>
                    Contact Me
                </Typography>
                <Typography>
                    
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                     Inz Inc 2023
                </Typography>
            </footer>
            </div>
        </ThemeProvider>
        </>
    );
}

export default App;