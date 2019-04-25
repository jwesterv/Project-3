import React, {Component} from 'react';
import trim from 'trim';
import axios from 'axios';


class MessageBox extends Component {
  
  // getChats() {
  //   axios.get("/api/chat").then(r => this.setState({ chats: r.data }))
  //   console.log(r.data)
  // }


 //reach out to sql db and make a query to get fam id and chat id


  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e){
      this.setState({
        message: e.target.value,
        userID: 'userID',
        familyID: 'famtest',
        chatID: 'chatID'

      });
  }
  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      // let dbCon = this.props.db.database().ref('/messages');

      let dbCon = this.props.db.database().ref('/chats/chat/' + this.state.familyID + '/' + this.state.chatID);
      dbCon.push({
        message: trim(e.target.value)
        ,date: Date.now()
        ,userID: 'userID'
      });
      this.setState({
        message: ''
      });
    }
  }
  render() {
    return (
      <form>
        <textarea
            className="textarea"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}>
          </textarea>
      </form>
    )
  }
}

export default MessageBox