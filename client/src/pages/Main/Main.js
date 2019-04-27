import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RegisterCreate from '../../components/Register.create';
import RegisterJoin from '../../components/Register.join';
import Navbar from '../../components/NavBar'
import "./style.css"
import logo from "../../images/image1.png"


// import Header from '../components/Header';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
  contain: {
    height: 500,

  },

  button: {
    margin: theme.spacing.unit,
    justifyContent: 'center',
  },

  input: {
    display: 'none',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div>
      <Navbar />
      <div align="center" className={classes.root}>

        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Paper>
              <div className="padding"></div>
              <img className="logo" src={logo}></img>
                <Button variant="outlined" color="primary" className={classes.button} component={Link} to="/registercreate">
                  Create Tree
</Button>
                <Button variant="outlined" color="primary" className={classes.button} component={Link} to="/registerjoin">
                  Join Tree
</Button>
            </Paper>

          </Grid>


        </Grid>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(CenteredGrid);