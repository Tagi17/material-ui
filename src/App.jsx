import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green, purple } from '@mui/material/colors';

import About from "./components/About";
import Art from './components/Art';
import Articles from "./components/Articles";
import Home from "./components/Home";
import Projects from "./components/Projects";
import React from 'react';
import ResponsiveAppBar from './components/navbar';
import useStyles from './components/styles';

const RouterLink = ["Art, Articles, Projects, About"] //associate a link to each of the pages 


const theme = createTheme({
  palette: {
    primary: {
      main: '#11afc7',
    },
    secondary: {
      // This is green.A700 as hex.
      //main: '#11cb5f',
      main: '#c74511',
    },
  },
});

//create functional component
const App = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
       <nav>
       <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
       </ul>
       <ul>
          <li>
            <Link to="/Art">Art</Link>
          </li>
       </ul>
       <ul>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
       </ul>
       <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
       </ul>
       </nav>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Art" element={<Art/>} />
              <Route path="/Articles" element={<Articles/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/About" element={<About/>} /> 
            </Routes>

            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Contact Me
                </Typography>
                <Typography>
                    
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                     Inz Inc 2023
                </Typography>
            </footer>
        </ThemeProvider>
        </>
    );
}

export default App;