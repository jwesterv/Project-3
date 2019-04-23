import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Navbar from '../../components/NavBar'


const styles = {
  card: {
    minWidth: 275,
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',   
    paddingtop: 20
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
};

function RegisterJoin(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Navbar />
    <Card className={classes.card}>
      <CardContent>

       
        <Typography variant="h5" component="h2">
          <TextField
            id="standard-with-placeholder"
            label="Email"
            placeholder="Email"
            className={classes.textField}
            margin="normal"
          />
        </Typography>

        <Typography variant="h5" component="h2">
          <TextField
            id="standard-with-placeholder"
            label="Username"
            placeholder="Username"
            className={classes.textField}
            margin="normal"
          />
        </Typography>
        <Typography variant="h5" component="h2">
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
                </Typography>
      
      </CardContent>
      <card className={classes.card}>
        <Button className={classes.button} variant="outlined" color="primary" size="small" >JOIN FAMILY</Button>
      </card>
    </Card>
    </div>
  );
}

RegisterJoin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterJoin);


