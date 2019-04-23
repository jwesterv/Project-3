import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

class WishForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentWillMount() {
    this.getWishes()
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getWishes() {
    axios.get("/api/wishes").then(r => this.setState({ list: r.data }))
  }

  handleSubmit(event) {
    //alert('A wish has been submitted: ' + this.state.value);



    axios.post("/api/wishes", {
      text: this.state.value,

    })
      .then((response) => {
        console.log(response);
        this.getWishes()

      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <br></br>
        <ol>
          {this.state.list.map(i => <li>{i.text}</li>)}

        </ol>
        <br></br>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <label>
            Wishlist:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  };
}


export default WishForm;