import {createTheme} from '@material-ui/core/styles';

//import { createTheme } from '@mui/material/styles';
//used to make text white 

const theme = createTheme({
    palette: {
      primary: {
        main: '#11afc7',
        secondary: 'black',
      },
      secondary: {
        main: '#c74511',
      },
      background: {
        default: 'black',
      },
      text: {
        primary: '#ffffff',
        secondary: 'blue',
      },
    },
  });

  export default theme;