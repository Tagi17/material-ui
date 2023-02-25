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
        justifyContent:"flex-end",
        display: 'flex',
        flex: 1,
        padding: '30px 0',
    },
    button:{
        marginTop: '40px',
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
        backgroundColor: '#f5f5f5',
        padding: '10px',
    },
    homepageBackground: {
        backgroundColor: 'black',
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
}));

//use classNames u want to style 
export default useStyles;

