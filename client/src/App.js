import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Chat from "./components/Chat/index"
import ProfileCreate from "./pages/ProfileCreate/ProfileCreate";
import ProfileJoin from "./pages/ProfileJoin/ProfileJoin";
<<<<<<< HEAD
import WishList from "./components/WishForm/WishForm"
=======
import Calendar from "./components/Calendar/index";

>>>>>>> c96514e0774a7fde48b6f735d55ba0aa500d05e1

function App() {
    return (
      <Router>

        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/join" component={ProfileJoin} />
        <Route exact path="/create" component={ProfileCreate} />
<<<<<<< HEAD
        <Route exact path="/wishlist" component={WishList} />
=======
        <Route exact path="/calendar" component={Calendar} />
        
>>>>>>> c96514e0774a7fde48b6f735d55ba0aa500d05e1

      </Router>
    );
  }


export default App;
