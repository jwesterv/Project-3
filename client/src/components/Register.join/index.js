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
import Header from '../../components/Header'
import { Link } from '@material-ui/core';
import Chat from '../../components/Chat/index';
import axios from "axios";
import Pending from '../../pages/pending/pending';
// import { Button, FormGroup, FormControl } from "react-bootstrap";



class RegisterJoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      dob: "",
    
      passwordVerify: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const token = "";
    const { history } = this.props;
    event.preventDefault();

    //add axios here to auth/login

    if (this.state.password === this.state.passwordVerify) {

      axios.post("/auth/famaccess", {
        accessCode: this.state.accessCode

      })
        .then((response) => {
          console.log(response);

          //create the user if accesscode is found
          
      
        })
        .catch(function (error) {
          console.log(error);
        });


      axios.post("/auth/registerJoin", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        dob: this.state.dob,
        accessCode: this.state.accessCode

      })
        .then((response) => {
          console.log(response);

          //redirect to main page (/main)
          
          history.push("/family")
        })
        .catch(function (error) {
          console.log(error);
        });

    }else{

      alert("Password and Confirm Password do not match")

    }

  }

  render() {
    return (
      <div>
        <Header />

        <div align="center">

          <Card>
            To Join Your Family, Enter the Below Information:
            <CardContent>
          
              <Typography variant="h5" component="h2">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                  margin="normal"
                />
              </Typography>

              <Typography variant="h5" component="h2">
                <TextField
                  id="username"
                  label="Username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username"
                  margin="normal"
                />
              </Typography>

              <Typography variant="h5" component="h2">

                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                  margin="normal"
                />
              </Typography>

              <Typography variant="h5" component="h2">
                <TextField
                  id="passwordVerify"
                  label="Confirm Password"
                  type="password"
                  value={this.state.passwordVerify}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                  margin="normal"
                />
              </Typography>

              <Typography variant="h5" component="h2">
                <TextField
                  id="dob"
                  label="Date of Birth"
                  type="text"
                  value={this.state.dob}
                  onChange={this.handleChange}
                  autoComplete="mm-dd-yy"
                  margin="normal"
                />
              </Typography>
              <Typography variant="h5" component="h2">
                <TextField
                name="accessCode"
                  id="accessCode"
                  label="Family Access Code"
                 
                  value={this.state.accessCode}
                  onChange={this.handleChange}
                  autoComplete="Family Access Code"
                  margin="normal"
                />
              </Typography>
            </CardContent>
          
              <Button onClick={this.handleSubmit} component={Link} to="/chat" variant="outlined" color="primary" size="small" >CREATE NEW FAMILY</Button>

      
          </Card>
        </div>
      </div >
    );
  }
}

export default RegisterJoin;