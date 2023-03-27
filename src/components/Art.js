import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { BrowserRouter, Link, Route, Router, Routes, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import useStyles, { darkTheme } from './styles';

import React from 'react';

const cards = [ 1,2,3,4,5,6,7,8,9]

const Art = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
  
    
    return (
        <ThemeProvider theme={darkTheme}> 
        <CssBaseline /> 
        <React.Fragment>
         <div className={classes.container}  >
            <Container maxWidth="sm" style={{ marginTop: '100px'}} >
                <Typography variant="h2" aligned="center" className={classes.text1} gutterBottom> 
                    NFT Collection
                </Typography>
                <Typography variant="h5" aligned="center" color="textSecondary" className={classes.text1} paragraph>
                    All made by @Inzhagi
                </Typography>
                <div className={classes.button}>
                    <Grid container spacing={2} justifyContent="center" >
                        <Grid item >
                            <Button variant="contained" color="secondary">
                                See my photos
                            </Button>
                        </Grid>
                        
                    </Grid>
                </div>
            </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} >
                {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}  >
                        <Card className={classes.card} style={{display: 'flex', flexDirection: 'column'}} >
                            <CardMedia
                                className={classes.cardMedia}
                                image ={require('./glow.png')}
                                title="Image title" 
                            />
                            <CardContent className={classes.CardContent} style={{ height: '100%'}} >
                                <Typography gutterBottom variant="h5">
                                    Sprite
                                </Typography>  
                                <Typography> 
                                    This is an avatar  
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary"> View </Button>
                                <Button size="small" color="secondary"> Edit </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}                
            </Grid>
        </Container>
        </React.Fragment>
        </ThemeProvider>
    )
};

export default Art;