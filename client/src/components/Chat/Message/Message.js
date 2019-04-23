import React, {Component} from 'react';

class Message extends Component {



  render(){
    return (
      <div data-username={this.props.username}>
        {this.props.username}
        {this.props.message}
      </div>
    )
  }
}
export default Message