//React Router Main
//==========================================
import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import components
import Login from "./components/Login/login";
import { PrivateRoute } from './components/PrivateRoute/index'
import Chat from "./components/Chat/index";
import WishList from "./components/WishForm/WishForm"
import ProfileForm from "./components/ProfileForm/ProfileForm"
import Calendar from "./components/Calendar/index";
import Header from './components/Header';
import Family from "./pages/Family/Family"
import RegisterCreate from "./components/Register.create";
import RegisterJoin from "./components/Register.join";
import ProfileCreate from "./pages/ProfileCreate/ProfileCreate";
import Navbar from "./components/NavBar/index"


//Import pages
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import ProfileJoin from "./pages/ProfileJoin/ProfileJoin";
import Pending from "./pages/pending/pending";
import UserProfile from "./pages/UserProfile/index";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ""
  
  };
  }

  //Main App Router
  render() {
    return (
      <Fragment>
        
      <BrowserRouter>
      
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <Route exact path="/publicchat" component={Chat} />
          <Route exact path="/join" component={ProfileJoin} />
          <Route exact path="/create" component={ProfileCreate} />
          {/* <Route path="/wishlist" component={WishList} /> */}
          <Route exact path="/profile" component={()=><div>
            <ProfileForm/>
            <WishList/>
          </div>} />
          <Route exact path="/calendar" component={Calendar} />
          <PrivateRoute exact path="/family" component={Family} />
          <Route exact path="/registercreate" component={RegisterCreate} />
          <Route exact path="/registerjoin" component={RegisterJoin} />
          <Route exact path="/pending" component={Pending} />
          <Route exact path="/userprofile" component={UserProfile} />
          

         
        </Switch>
      </BrowserRouter>
      </Fragment>
    )
  }
}



