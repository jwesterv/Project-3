import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/NavBar'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Pending (props) {
  const { classes } = props;

  return (
    <div>
        <Navbar />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Pending Status
        </Typography>
        <Typography component="p">
          Pending Approval Landing Page
        </Typography>
      </Paper>
    </div>
  );
}

Pending.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pending);


