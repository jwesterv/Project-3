import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Chat from "./components/Chat/index"
import ProfileCreate from "./pages/ProfileCreate/ProfileCreate";
import ProfileJoin from "./pages/ProfileJoin/ProfileJoin";
import Calendar from "./components/Calendar/index";


function App() {
    return (
      <Router>

        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/join" component={ProfileJoin} />
        <Route exact path="/create" component={ProfileCreate} />
        <Route exact path="/calendar" component={Calendar} />
        

      </Router>
    );
  }


export default App;
