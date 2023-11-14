import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { BrowserRouter, Link, Route, Routes, Switch, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';

import About from "./components/About";
import Art from './components/Art';
import Articles from "./components/Articles";
import { Canvas } from '@react-three/fiber';
import Contact from './components/Contact';
import Home from "./components/Home";
import Projects from "./components/Projects";
import ResponsiveAppBar from './components/navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import useStyles from './components/styles';

//create functional component
const App = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
 
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
              <Route path="/Contact" element={<Contact/>} /> 
            </Routes>
       
            {/* <footer className={classes.footer} >
                <Typography className={classes.googleFont} variant="h6" align="center" gutterBottom>
                    Contact Me
                </Typography>
                <Typography>
                    
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                     Inz Inc 2023
                </Typography>
            </footer> */}
            </div>
        </ThemeProvider>
        </>
    );
}

export default App;