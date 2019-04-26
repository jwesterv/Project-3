import React, { Component } from "react";

import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./login.css";
import axios from 'axios';
import Navbar from "../NavBar";
import { Link, Redirect, Route } from 'react-router-dom';
import Chat from '../../components/Chat';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
    axios.post("/auth/login", {
      email: this.state.email,
      password: this.state.password,

    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token)
        history.push("/family")
      })
      .catch(function (error) {
        console.log(error);

      });


  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="Login">

          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <div>Email</div>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <div>Password</div>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              component={Link} to="/chat"
            >
              Login
          </Button>
          </form>
        </div>
      </div>
    );
  }
}