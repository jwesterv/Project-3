import React, { Component } from "react";
import firebase from 'firebase';
import "./App.css";
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import Button from 'react-bootstrap/Button';
import ProfileCreate from './components/Profile/ProfileCreate';
import ProfileJoin from './components/Profile/ProfileJoin';



// import logo from "./logo.svg";


class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyCcq7i-yLkoaJ5kZoFJEzl6LTSkXfpKFWw",
      authDomain: "family-97404.firebaseapp.com",
      databaseURL: "https://family-97404.firebaseio.com",
      projectId: "family-97404",
      storageBucket: "family-97404.appspot.com",
      messagingSenderId: "991582671358"
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <div className="container">
        <Header title="Firebase Chat" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
        <div className="profile">
        <h1 align="center">Create Family</h1>
          <ProfileCreate />
          <h1 align="center">Join Family</h1>
          <ProfileJoin />
        </div>
      </div>
    );
  }
}

export default App;
