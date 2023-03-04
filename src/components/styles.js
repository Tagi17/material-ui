import { makeStyles } from '@material-ui/core/styles';

//create a hook
//open new objects for the classNames we created in the App.jsx file and add specific styles we want
const useStyles = makeStyles((theme) => ({

    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    buttons:{
        size:"large",
        justifyContent:"center",
        display: 'flex',
        flex: 1,
        padding: '30px 0',
        marginLeft: '1rem', 
        marginRight: '1rem',
        color: '#ffffff',
        textDecoration: 'none',
        "& button:hover": {
            backgroundColor: "#ffffff",
            color: '#000000',
            transform: 'scale(0.95)',
        },
        "& .MuiTypography-button": {
            color: "#000000" /* also change color of nested Typography component */
          },
    },
    button:{
        marginTop: '40px',
        borderBottom: 'none',
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
    homepageBackground: {
        backgroundColor:  '#000000 !important',
    },
    googleFont: {
        fontFamily: 'VT323 monospace', // use the font family name you got from Google Fonts
    },
    myText:{
        fontFamily: 'VT323',
        fontSize: '2rem',
    },
    text: {
        zIndex: 1,
        primary: '#ffffff',
        secondary: 'blue',
    },
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
}));

//use classNames u want to style 
export default useStyles;

