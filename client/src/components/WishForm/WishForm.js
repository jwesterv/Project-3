import React, { Component } from "react";

//import API from "./API";
import axios from "axios";


//Payload Template
//=================================================
//import privateHelpers -- link below import to your component



import privateHelpers from '../PrivateRoute/helpers/private.helper'

if (localStorage.getItem('token')) {
  //get token
  let token = privateHelpers.getToken();
  //split token
  privateHelpers.splitToken(token);
  //pull user data from token
  const userData = privateHelpers.getUserData(token);
  //view token and user obj
  console.log(token)
  console.log(userData)

}
//==================================================

class WishForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        
        text:'', 
        granted: false,
        list: [] 
      };
  
      this.handleAddChange = this.handleAddChange.bind(this);
      //this.handleDeleteChange = this.handleDeleteChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    componentWillMount(){
      this.getWishes()
    }
    handleAddChange(event) {
      this.setState({ text: event.target.value });
    }

    getWishes(){
      axios.get("/api/wishes").then(r=>this.setState({list:r.data}))
    }
  
    handleSubmit(event) {
      alert('A wish has been submitted: ' + this.state.text);
      
    
      
      axios.post("/api/wishes", {
        text: this.state.text,
        granted: this.state.granted
        
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
  
    
   
    deleteWish(id) {
      axios.delete("/api/wishes/" + id)
        .then(res => this.getWishes())
        .catch(err => console.log(err));
    };
  

  
    
  
    render() {
      return (
        <div>
          <br></br>
          <ol>
          {this.state.list.map(i=><li>{i.text}   <button value={i.id} onClick={() => {this.deleteWish(i.id)}}>X</button></li>)}

     
          
          
          </ol>
          <br></br>
          
          <form onSubmit={this.handleSubmit.bind(this)}>
            
            <label> 
              Wishlist:
            <input type="text" value={this.state.text} onChange={this.handleAddChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
    
      );
    };
  }
  
  
  export default WishForm;