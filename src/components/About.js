import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const About = () => {
    const classes = useStyles(); 
    
    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
            <div className={classes.centerText1}>
                <Typography className={classes.myText11}>
                    Hello, my name is Inzhagi. I am a GWC Alumni, Vice President of the Blockchain Club, and a Front end Dev focusing on Web3 integration
                </Typography>
                <Typography  className={classes.myText11}>
                I am a front-end developer with experience in shuttle tracker projects and a strong interest in Web3.
                </Typography>
                <Typography  className={classes.myText11}  style={{ textAlign: 'center' }}>
                I am also an active member of a blockchain club and enjoy creating pixel art in my free time. <br /> I am excited to bring my skills and passion to a dynamic team
                </Typography>
                <Typography  className={classes.myText11}>
                Check out my art here
                </Typography>
            </div>
        </ThemeProvider>
    )
};

export default About;