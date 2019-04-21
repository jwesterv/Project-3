//React Router Main
//==========================================
import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import components
import Login from "./components/Login/login";
import { PrivateRoute } from './components/PrivateRoute/index'
import Chat from "./components/Chat/index";
import WishList from "./components/WishForm/WishForm"
import Profile from "./components/ProfileForm/ProfileForm"
import Calendar from "./components/Calendar/index";

//Import pages
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import ProfileCreate from "./pages/ProfileCreate/ProfileCreate";
import ProfileJoin from "./pages/ProfileJoin/ProfileJoin";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }


  //Main App Router
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <Route exact path="/publicchat" component={Chat} />
          <Route exact path="/join" component={ProfileJoin} />
          <Route exact path="/create" component={ProfileCreate} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/calendar" component={Calendar} />

        </Switch>
      </BrowserRouter>
    )
  }
}



