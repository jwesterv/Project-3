import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Header from '../components/Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  contain: {
    height: 500
  },

  button: {
    margin: theme.spacing.unit,
  },

  input: {
    display: 'none',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    {/* <Header /> */}
      <Grid container spacing={24}>
        <Grid className={classes.contain}  item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="outlined" color="primary" className={classes.button}>
              Create
</Button>
            <Button variant="outlined" color="primary" className={classes.button}>
              Join
</Button>

</Paper>
        </Grid>


      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(CenteredGrid);