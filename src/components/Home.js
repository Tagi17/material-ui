import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import {ThemeProvider, createTheme} from '@mui/material/styles';

import React from 'react';
import useStyles from './styles';

const theme = createTheme({
    overrides: {
        MuiTypography: {
            h2: {
              fontFamily: 'VT323 monospace',
              color: '#ffffff',
              fontSize: '2rem',
            },
          },
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.homepageBackground}>
            <div className={classes.googleFont}>
                <Typography sx={{ fontFamily: 'VT323'}} aligned="left" variant='h2'>
                    Creative Artist
                    </Typography>
                <Typography variant="subtitle1" aligned="left">
                    Front end Dev
                    </Typography>
            </div>
        </div>
        </ThemeProvider>
    );
};

export default Home;