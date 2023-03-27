import {createTheme, makeStyles} from '@material-ui/core/styles';

import { Card as MuiCard } from '@material-ui/core';

//create a hook
//open new objects for the classNames we created in the App.jsx file and add specific styles we want

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        paper: '#424242',
        default: '#000000',
      },
      text: {
        primary: '#ffffff',
        secondary: '#b0bec5',
      },
      custom: {
        color1: '#878683',
        color2: '#4C4E52',
        color3: '#6B6A69',
      },
    },
  });
 
  const theme = createTheme({
    ...darkTheme,
    components: {
      MuiAppBar: {
      
          root: {
            backgroundColor: '#708090',
          },
       
      },
    },
      MuiBox: {
        styleOverrides: {
          root: {
            paddingTop: '25%',
            position: 'relative',
        },
      },
    },
    MuiCard: {
      root: {
        background: "#424242",
        color: "#ffffff",
      },
    },
  });
  

const useStyles = makeStyles((theme) => ({

    container:{
        //backgroundColor: theme.palette.background.paper,
        //backgroundColor: '#708090',
        //padding: theme.spacing(8, 0, 6),
    },
    buttons:{
        justifyContent:"center",
        display: 'flex',
        flex: 1,
        padding: '30px 0',
        marginLeft: '1rem', 
        marginRight: '1rem',
        color: '#ffffff',
        textDecoration: 'none',
        "& button:hover": {
            backgroundColor: "#708090",
            color: '#000000',
            transform: 'scale(0.95)',
        },
        "& .MuiTypography-button": {
            color: "#000000" /* also change color of nested Typography component */
          },
    },
    root:{
        flexGrow: 1,
    },
    button:{
        marginTop: '40px',
        borderBottom: 'none',
    },
    logo:{
        transform: 'scale(0.95)',
    },
    cardGrid:{
        padding: '20px 0',
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia:{
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent:{
        flexGrow: 1,
    },
    footer: {
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        position: "fixed",
        backgroundColor: '#f5f5f5',
        padding: '10px',
    },
    googleFont: {
        fontFamily: 'VT323 monospace', // use the font family name you got from Google Fonts
    },
    myText:{
        fontFamily: 'VT323',
        fontSize: '2rem',
        marginBottom: '0.5rem', 
    },
    myText11:{
      fontFamily: 'VT323',
      fontSize: '1.6rem',
      marginBottom: '0.5rem', 
      marginTop: '3rem',
      marginLeft: '5rem',
      marginRight: '5rem',
  },
    text1:{
        fontFamily: 'VT323',
        textAlign: 'center',
    },
    text11:{
      fontFamily: 'VT323',
      textAlign: 'center',
      //paddingTop: '300px',
  },
    text: {
        zIndex: 1,
        //primary: '#ffffff',
        secondary: 'blue',
    },
    centerText: {
        display: "flex",
        justifyContent: 'center',
        paddingTop: '300px',
        paddingLeft: '300px',
    },
    centerText1: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainContainer:{
        height: '100vh',
    },
    threeCanvasContainer: {
      width: '100%',
      height: '0',
      paddingBottom: '56.25%',
      position: "relative",
    },
    "threeCanvasContainer canvas": {
      position: "absolute",
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    
}));

//use classNames u want to style 
export { darkTheme, theme, useStyles as default, MuiCard };

