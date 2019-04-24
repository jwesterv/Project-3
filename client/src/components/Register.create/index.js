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
import { Link } from '@material-ui/core';
import Chat from '../../components/Chat/index';
import axios from "axios";
import Pending from '../../pages/pending/pending';



class RegisterCreate extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      email: "",
      password: "",
      username: "",
    };
};

handleSubmit = event => {
  
event.preventDefault();
//add axios here to auth/login
axios.post("/auth/register", {
    email: this.state.email,
    password: this.state.password,
    username: this.state.username,
 
  })

  .then((response) => {
    console.log(response);
  
    //redirect to main page (/main)

  })
  .catch(function (error) {
    console.log(error);
  });

}

render () {
  return (
    <div>
        <Navbar />
  
    <div align="center">
    
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          <TextField
            id="standard-with-placeholder"
            label="Email"
            placeholder="Email"
            margin="normal"
          />
        </Typography>

        <Typography variant="h5" component="h2">
          <TextField
            id="standard-with-placeholder"
            label="Username"
            placeholder="Username"
            margin="normal"
          />
        </Typography>
        <Typography variant="h5" component="h2">
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
                </Typography>
      
      </CardContent>
      <card>
        <Button onClick={this.handleSubmit} component={Link} to="/chat" variant="outlined" color="primary" size="small" >JOIN FAMILY</Button>
      </card>
    </Card>
    </div>
    </div>
  );
}
}

export default RegisterCreate;