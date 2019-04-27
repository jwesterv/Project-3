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
      dob: "",
      familyName: "",
      passwordVerify: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({
      email: event.target.email,
      password: event.target.password,
      username: event.target.username,
      dob: event.target.dob,
      familyName: event.target.familyName,
      passwordVerify: event.target.passwordVerify
    });
  }

  handleSubmit = event => {
    const token = "";
    const { history } = this.props;
    event.preventDefault();
    //add axios here to auth/login

    if (this.state.password === this.state.passwordVerify) {
      axios.post("/auth/register", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        passwordVerify: this.state.passwordVerify,
        dob: this.state.dob,
        familyName: this.state.familyName,

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
        <Navbar />

        <div align="center">

          <Card>
            To Create a New Family Enter the Below Information:
            <CardContent>
              <Typography variant="h5" component="h2">
                <TextField
                  id="standard-dob-input"
                  label="New Family Name"
                  type="text"
                  value={this.state.familyName}
                  onChange={this.handleChange}
                  autoComplete="Your Family's Name"
                  margin="normal"
                />
              </Typography>
              <Typography variant="h5" component="h2">
                <TextField
                  id="standard-with-placeholder"
                  label="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                  margin="normal"
                />
              </Typography>

              <Typography variant="h5" component="h2">
                <TextField
                  id="standard-with-placeholder"
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
                  id="standard-password-input"
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
                  id="standard-passwordVerify-input"
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
                  id="standard-dob-input"
                  label="Date of Birth"
                  type="text"
                  value={this.state.dob}
                  onChange={this.handleChange}
                  autoComplete="mm-dd-yy"
                  margin="normal"
                />
              </Typography>

            </CardContent>
            <card>
              <Button onClick={this.handleSubmit} component={Link} to="/chat" variant="outlined" color="primary" size="small" >CREATE NEW FAMILY</Button>

            </card>
          </Card>
        </div>
      </div >
    );
  }
}

export default RegisterCreate;