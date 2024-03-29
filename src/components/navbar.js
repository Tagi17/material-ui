import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { Link as RouterLink } from 'react-router-dom';
import darkTheme from './styles'
import enhexport from "./enhexport.png"
import useStyles from './styles';

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const theme = darkTheme();
  const navigate = useNavigate();

  const handleClickArt = () => navigate('/Art');
  const handleClickArticles = () => navigate('/Articles');
  const handleClickProjects = () => navigate('/Projects');
  const handleClickAbout = () => navigate('/About');
  const handleClickContact = () => navigate('/Contact');
  const handleClickHome = () => navigate('/');
  
  return (
    <AppBar sx={{backgroundColor: '#000000' }} position="sticky">
        <Toolbar sx={{ paddingTop: '60px' }}>
        <Box className={classes.logo} >
        <Link to="/" onClick={handleClickHome}>
          <img src={enhexport} alt="Logo" sx={{marginRight: 1}}/>
        </Link>
        </Box>
        <div className={classes.buttons} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Stack direction="row" spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button size="large" variant="text" onClick={handleClickArticles}>
            <Link to="/Articles" style={{ textDecoration: 'none'}} >
            <Typography variant="button" sx={{ fontFamily: 'VT323', fontSize: '2.5rem' }}>Articles</Typography>
            </Link>
          </Button>
          <Button size="large" variant="text" onClick={handleClickProjects}>
            <Link to="/Projects" style={{ textDecoration: 'none'}} >
            <Typography variant="button" sx={{ fontFamily: 'VT323', fontSize: '2.5rem' }}>Projects</Typography>
            </Link>
          </Button>
          <Button size="large" variant="text" onClick={handleClickAbout}>
            <Link to="/About" style={{ textDecoration: 'none'}} >
            <Typography variant="button" sx={{ fontFamily: 'VT323', fontSize: '2.5rem' }}>About</Typography>
            </Link >
          </Button>
          <Button size="large" variant="text" onClick={handleClickContact}>
            <Link to="/Contact" style={{ textDecoration: 'none'}} >
            <Typography variant="button" sx={{ fontFamily: 'VT323', fontSize: '2.5rem' }}>Contact</Typography>
            </Link >
          </Button>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
