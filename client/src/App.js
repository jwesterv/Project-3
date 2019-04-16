import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
// import Chat from "./pages/Chat"
import ProfileCreate from "./pages/ProfileCreate/ProfileCreate";
import ProfileJoin from "./pages/ProfileJoin/ProfileJoin";

function App() {
    return (
      <Router>

        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/chat" component={Chat} /> */}
        <Route exact path="/join" component={ProfileJoin} />
        <Route exact path="/create" component={ProfileCreate} />

      </Router>
    );
  }


export default App;
