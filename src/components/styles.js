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

    arrowContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(1),
  },
    arrowButton: {
      color: theme.palette.secondary.main,
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
            color: "#455e77" /* also change color of nested Typography component */
          },
    },
    root:{
        flexGrow: 1,
        maxHeight: '100vh', // set the height to 100vh to make the page take up the full height of the viewport
        //overflow: 'hidden',
    },
    gridCenter: {
      display: 'flex',
    
      marginTop: '10vh',
      justifyContent: 'center', // Center horizontally
      minHeight: '100vh', 
    },
    textG: {
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(2), // Add spacing between text and image on larger screens
      },
    },
    imageG: {
      maxWidth: '100%',        // Make the image responsive
      display: 'block',   
      justifyContent: 'center',     // Remove extra space below the image
      marginLeft: 'auto',      // Center the image horizontally
      marginRight: 'auto',     // Center the image horizontally
    },
    glowImage:{
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(2), 
      },
    },
    content:{
      padding: '20px', /* Adjust the padding as needed */
      margin: '-20px', 
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
    cardGrid1:{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(4),
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'VT323',
    },
    card1:{
        height: '100%',
        display: 'flex',
        fontFamily: 'VT323',
    },
    cardMedia:{
        height: 0,
        paddingTop: '56.25%',
        fontFamily: 'VT323',
    },
    cardMedia1:{
      height: 'auto',
      paddingTop: '56.25%',
      fontFamily: 'VT323',
  },
    cardContent:{
        flexGrow: 1,
        fontFamily: 'VT323',
    },
    footer:{
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        position: "fixed",
        backgroundColor: '#000000',
        padding: '10px',
        fontFamily: 'VT323',
    },
    googleFont: {
        fontFamily: 'VT323', // use the font family name you got from Google Fonts
    },
    myText:{
        fontFamily: 'VT323',
        fontSize: '3rem',
        display: 'flex',
        marginBottom: '0.5rem', 
        marginTop: '40px',
        paddingLeft: '580px',
        [theme.breakpoints.down('md')]: {
          textAlign: 'center', 
        },
    },
    myTexttt:{
      fontFamily: 'VT323',
      fontSize: '3rem',
      display: 'flex',
      marginBottom: '0.5rem', 
      paddingLeft: '450px',
      marginTop: '120px',
  },
      myTextt:{
        fontFamily: 'VT323',
        fontSize: '2.4rem',
        display: 'flex',
        marginBottom: '200px', 
        paddingLeft: '130px',
        marginTop: '30px',
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
      justifyContent: 'center',
      paddingTop: '210px',
      paddingLeft: '450px',
    },
    text11:{
      fontFamily: 'VT323',
      textAlign: 'center',
      //paddingTop: '300px',
    },
    text: {
        zIndex: 1,
        secondary: 'blue',
    },
    threeMove: {
      marginTop: '-140px',
      marginLeft: '-30%',
    },
    title:{
      fontFamily: 'VT323',
    },
    media:{
      fontFamily: 'VT323',
      maxWidth: '900px',
      margin: 'auto', // Center the card horizontally
      display: 'flex',
      flexDirection: 'column', 
      marginTop: '100px',
      height: 'auto',
      
      
    },
    centerText: {
        display: "flex",
        justifyContent: 'center',
        paddingTop: '210px',
        paddingLeft: '320px',
    },
    centerText1: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    pushRight:{
      marginLeft: ' 70px',
    },
    gridItem:{
      minWidth: 0,
      flexShrink: 0,
      paddingRight: theme.spacing(1),
    },
    gridContainer:{
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      marginBottom: theme.spacing(1),
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

