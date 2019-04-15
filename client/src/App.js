import React, { Component } from "react";
import "./App.css";


class App extends Component {
  render() {
    return (
      //Background image "pending"
      <div className="view">
      {/*Container to hold and center logo and buttons in page*/}
        <div className="container">
        {/*Logo made but needs to be made available in vector*/}
          <div className="logo"></div>
          {/*Buttons to navigate to pages, no routes yet*/}
          <button className="btn btn-rounded btn-outline-light btn-primary">Create</button>
          <button className="btn btn-rounded btn-outline-light btn-primary">Join</button>
        </div>
      </div>

    );
  }
}

export default App;
