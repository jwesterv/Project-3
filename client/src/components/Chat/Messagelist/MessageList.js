import React, {Component} from 'react';
import Message from '../Message/Message';
import _ from 'lodash';


class MessageList extends Component {
  constructor(props){
    super(props);
    //reach out to sql db and make a query to get fam id and chat id

    this.state = {
      messages: [],
      familyID: 'famtest',
      chatID: 'chatID'
      
    };
    let app = this.props.db.database().ref('/chats/chat/' + this.state.familyID + '/' + this.state.chatID);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
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
            <Message message = {message.message} />

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