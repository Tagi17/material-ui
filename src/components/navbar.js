import { AppBar, Button, Stack, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import useStyles from './styles';

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClickArt = () => navigate('/Art');
  const handleClickArticles = () => navigate('/Articles');
  const handleClickProjects = () => navigate('/Projects');
  const handleClickAbout = () => navigate('/About');

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <div className={classes.buttons}>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Button onClick={handleClickArt}>
              ART
              <Link to="/Art">Art</Link>
            </Button>
          </Stack>
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Button size="large" variant="text" onClick={handleClickArticles}>
              Articles
              <Link to="/Articles">Articles</Link>
            </Button>
          </Stack>
          <Button size="large" variant="text" onClick={handleClickProjects}>
            Projects
            <Link to="/Projects">Projects</Link>
          </Button>
          <Button size="large" variant="text" onClick={handleClickAbout}>
            About
            <Link to="/About">About</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
