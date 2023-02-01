import { makeStyles } from '@material-ui/core/styles';
import { DonutLarge } from '@material-ui/icons';
import { withTheme } from 'styled-components';

//create a hook
//open new objects for the classNames we created in the App.jsx file and add specific styles we want
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    buttons:{
        size:"large",
        justifyContent:"flex-end",
        display: 'flex',
        flex: 1,
        padding: '30px 0',
    },
    button:{
        marginTop: '40px'
    },
    cardGrid:{
        padding: '20px 0'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        height: 0,
        paddingTop: '56.25%'
    },
    cardContent:{
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }

}));

//use classNames u want to style 
export default useStyles;

//add this to a custom theme file

