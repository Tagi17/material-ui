import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { BrowserRouter, Link, Route, Router, Routes, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import React from 'react';
import useStyles from './styles';

const cards = [ 1,2,3,4,5,6,7,8,9]

const Art = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
    return (
        <React.Fragment>
         <div className={classes.container}  style={{background:'#ffffff'}}>
            <Container maxWidth="sm" style={{ marginTop: '100px', background:'#ffffff'}} >
                <Typography variant="h2" aligned="center" color="textPrimary" gutterBottom> 
                    NFT Collection
                </Typography>
                <Typography variant="h5" aligned="center" color="textSecondary" paragraph>
                    All made by @Inzhagi
                </Typography>
                <div className={classes.button}>
                    <Grid container spacing={2} justifyContent="center" style={{background:'#ffffff'}}>
                        <Grid item >
                            <Button variant="contained" color="secondary">
                                See my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="secondary">
                                Secondary Action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
        <Container className={classes.cardGrid} style={{background:'#ffffff'}} maxWidth="md">
            <Grid container spacing={4} style={{background:'#ffffff'}} >
                {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4} style={{background:'#ffffff'}} >
                        <Card className={classes.card} style={{background:'#ffffff'}} >
                            <CardMedia
                                className={classes.cardMedia}
                                image ={require('./glow.png')}
                                title="Image title" 
                            />
                            <CardContent className={classes.CardContent} style={{background:'#ffffff'}} >
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
    )
};

export default Art;