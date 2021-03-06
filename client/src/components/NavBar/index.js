import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },

   grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Button color="inherit" component={Link} to="/">Home
                       </Button>
            <Button color="inherit" component={Link} to="/about">About
                       </Button>


                      </Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
