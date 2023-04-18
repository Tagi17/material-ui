import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import React, { useState } from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DEFI from "./DEFI.png"
import crypto from "./crypto.png"
import { makeStyles } from '@material-ui/core/styles';
import nft from "./nft.png"

const cards = [
  {
    id: 1,
    image: nft,
    title: 'Sprite 1',
    description: 'This is an avatar 1'
  },
  {
    id: 2,
    image: DEFI,
    title: 'Sprite 2',
    description: 'This is an avatar 2'
  },
  {
    id: 3,
    image: crypto,
    title: 'Sprite 3',
    description: 'This is an avatar 3'
  }
];

const Articles = () => {
    const classes = useStyles(); 

    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleNextCard = () => {
      setActiveCardIndex((activeCardIndex + 1) % cards.length);
    };

    return(
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia className={classes.cardMedia} image={cards[activeCardIndex].image} title={cards[activeCardIndex].title} />
            <CardContent className={classes.CardContent} style={{ height: '100%' }}>
              <Typography gutterBottom variant="h5">
                {cards[activeCardIndex].title}
              </Typography>
              <Typography>{cards[activeCardIndex].description}</Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.googleFont} size="small" color="secondary">
                View Full Article
              </Button>
            </CardActions>
            <IconButton className={classes.arrowButton} onClick={handleNextCard}>
              <ArrowForwardIcon />
            </IconButton>
          </Card>
        </Grid>
      </Grid>
      <Typography className={classes.text1}> </Typography>
    </ThemeProvider>
    );
};

export default Articles;