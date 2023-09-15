import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import React, { useState } from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import crypto from "./crypto.png"
import defi from "./defi.png"
import { makeStyles } from '@material-ui/core/styles';
import nft from "./nft.png"

const cards = [
  {
    id: 1,
    image: nft,
    title: 'Explore the world of NFTs and learn the functionality behind them.',
    description: 'This is an Article 1'
    
  },
  {
    id: 2,
    image: defi,
    title: 'Discover the financial systems and delve into its fundamental concepts, significance, and functionalities.',
    description: 'This is an Article 2'
  },
  {
    id: 3,
    image: crypto,
    title: 'Uncover the world of cryptocurrencies and get an overview of what they are, why they are necesarry and the potential they hold.',
    description: ''
  }
];

const Articles = () => {
    const classes = useStyles(); 

    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleNextCard = () => {
      setActiveCardIndex((activeCardIndex + 1) % cards.length);
    };

    const handleNext = () => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const handlePrev = () => {
      setActiveCardIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
    };
  

    return(
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.root1} style={{ overflow: 'hidden' }}>
        <Grid container spacing={1} alignItems='center' justifyContent='center' style={{overflow: 'hidden' }} >
        {activeCardIndex > 0 ? (
        <Grid item>
          <IconButton onClick={handlePrev} style={{ margin: '0 10px' }} color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
      ) : (
        <Grid item style={{ width: '72px' }} /> 
      )}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center'  }}>
            <img
              src={cards[activeCardIndex].image}
              alt={cards[activeCardIndex].title}
              className={classes.image}
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', marginTop: '50px', marginBottom: '50px' }}
              //style={{ width: '60%', height: 'auto', paddingBottom: '50px', paddingTop: '80px' }}
            />
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', zIndex: 1 }} >
            <IconButton onClick={handleNext} style={{  margin: '0 10px' }} color="primary">
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}sx={{ textAlign: 'center', marginTop: '10px' }}>
              <Typography variant="h6" className={classes.title} style={{ width: '100%', height: 'auto', paddingBottom: '50px', textAlign: 'center', fontSize: '2.5rem', lineHeight: '1.3', maxWidth: '80%', margin: '0 auto' }}>
                {cards[activeCardIndex].title}
              </Typography>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
    );
};

export default Articles;