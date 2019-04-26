import React, { Component } from 'react';
import Message from '../Message/Message';
import _ from 'lodash';



//Payload Template
//=================================================
//import privateHelpers -- link below import to your component
import privateHelpers from '../../PrivateRoute/helpers/private.helper'

if (localStorage.getItem('token')) {
  //get token
  let token = privateHelpers.getToken();
  //split token
  let splitToken = privateHelpers.splitToken(token);
  //pull user data from token
  const userData = privateHelpers.getUserData(token);
  //view token and user obj
  console.log(token)
  console.log(userData)

}
//==================================================







class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      familyID: 'famtest',
      chatID: 'chatID',
      token: 'token'

    };
    let app = this.props.db.database().ref('/chats/chat/' + this.state.familyID + '/' + this.state.chatID);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  // getUserData = function () {
  //   const token = this.getToken();
  //   return this.splitToken(token);
  // };



  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messages: messages,

    });
  }



  render() {
    let messageNodes = this.state.messages.map((message) => {
      return (
        <div className="card">
          <div className="card-content">
            <Message message={message.message} />

          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList