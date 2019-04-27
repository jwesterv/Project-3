import React, { Component } from 'react';
import firebase from 'firebase';
// import './App.css';
import MessageList from './Messagelist/MessageList';
import Header from '../../components/Header/index';
import MessageBox from './Messagebox/MessageBox';


class Chat extends Component {
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
<div>
      <Header />
      <div className="container">
     
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
      </div>
      </div>
    );
  }
}

export default Chat;