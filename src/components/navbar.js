import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import enhexport from "./enhexport.png"
import useStyles from './styles';

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClickArt = () => navigate('/Art');
  const handleClickArticles = () => navigate('/Articles');
  const handleClickProjects = () => navigate('/Projects');
  const handleClickAbout = () => navigate('/About');
  const handleClickHome = () => navigate('/Home');
  
  return (
    <AppBar position="sticky" color="primary">
        <Toolbar >
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Link to="/Home" onClick={handleClickHome}>
          <img src={enhexport} alt="Logo" sx={{marginRight: 1}}/>
        </Link>
        </Box>
        <div className={classes.buttons} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Stack direction="row" spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button size="large" variant="text" onClick={handleClickArt} sx={{ textDecoration: 'none', borderBottom: 'none'}}>
            <Link to="/Art" style={{ textDecoration: 'none'}}>
            <Typography variant="button" sx={{ fontFamily: 'VT323', fontSize: '2.5rem' }}>Art</Typography>
            </Link>
          </Button>
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
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
