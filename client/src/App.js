import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
// import Chat from "./pages/Chat"

function App() {
    return (
      <Router>

        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/chat" component={Chat} /> */}

      </Router>
    );
  }


export default App;
