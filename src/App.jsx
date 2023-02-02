import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

import React from 'react';
import { Stack } from '@mui/material';
import useStyles from './styles';

const cards = [ 1,2,3,4,5,6,7,8,9]

const theme = createTheme({
    palette: {
      primary: {
        main: green[300],
        dark: green[500]
      },
      secondary: {
        main: purple[600],
        dark: purple[800]
      },
      primaryLight: {
        main: green[50],
        contrastText: "#616161"
      }
    }
  });

//create functional component
const App = () => {
    const classes = useStyles(); //call useStyles as a function from styles.js
    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" color= "primaryLight">
                <Toolbar >
                    <div className={classes.buttons}>
                        <Stack spacing={2}  sx={{ flexGrow: 1 }}>
                        <Button color="inherit" size="large" variant="text">ART</Button>
                        </Stack>
                        <Stack spacing={2}  sx={{ flexGrow: 1 }}>
                        <Button color="secondary" size="large" variant="text">ARTICLES</Button>
                        </Stack>
                        <Button size="large" variant="text">PROJECTS</Button>
                        <Button size="large" variant="text"> ABOUT</Button>
                     
                    </div>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                        <Typography variant="h2" aligned="center" color="textPrimary" gutterBottom> 
                            NFT Collection
                        </Typography>
                        <Typography variant="h5" aligned="center" color="textSecondary" paragraph>
                            All made by @Inzhagi
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                             <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image ={require('./glow.png')}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Sprite
                                        </Typography>  
                                        <Typography> 
                                            This is an avatar  
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary"> View </Button>
                                        <Button size="small" color="primary"> Edit </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}                
                    </Grid>
                </Container>
            </main>
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