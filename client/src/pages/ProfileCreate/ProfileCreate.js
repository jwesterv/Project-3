import React, {Component} from 'react';
import "./style.css"
import axios from 'axios';


export default class ProfileCreate extends React.Component {
    //define methods here
loginMethods = {
    register: () => axios.post("/auth/register", {
        name: this.state.firstName,
        email: this.state.email,
        password: this.state.password
    })
};
    state = {
        firstName: "",
        lastName: "",
        birthday: "",
        address: "",
        city: "",
        homeState: "",
        zipCode: "",
        phone: "",
        email: "", 
        wishList: ""
    }

    change = e => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            birthday: "",
            address: "",
            city: "",
            homeState: "",
            zipCode: "",
            phone: "",
            email: "", 
            wishList: ""
        });  
        

        
    }

    render() {
        return (
            <div align="center">
            <form onSubmit={this.loginMethods.register()}>
                <div className="form-group">
                <input 
                name="firstName"
                placeholder="First name" 
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                />
                </div>
                <div className="form-group">
                 <input 
                name="lastName"
                placeholder="Last name" 
                value={this.state.lastName} 
                onChange={e => this.change(e)}
                />
                </div>
                <div className="form-group">
                 <input 
                name="birthday"
                placeholder="Birthday" 
                value={this.state.birthday} 
                onChange={e => this.change(e)}
                />
                </div>
                <div className="form-group">
                 <input 
                name="address"
                placeholder="Address" 
                value={this.state.address} 
                onChange={e => this.change(e)}
                />
                 <div className="form-group"></div>
                 <input 
                name="city"
                placeholder="City" 
                value={this.state.city} 
                onChange={e => this.change(e)}
                />
                </div>
                 <div className="form-group">
                 <input 
                name="homeState"
                placeholder="State" 
                value={this.state.homeState} 
                onChange={e => this.change(e)}
                />
                </div>
                 <div className="form-group">
                 <input 
                name="zipCode"
                placeholder="Zip Code" 
                value={this.state.zipCode} 
                onChange={e => this.change(e)}
                />
                </div>
                <div className="form-group">
                 <input 
                name="phone"
                placeholder="Phone" 
                value={this.state.phone} 
                onChange={e => this.change(e)}
                />
                </div>
                <div className="form-group">
                 <input 
                name="email"
                placeholder="Email" 
                value={this.state.email} 
                onChange={e => this.change(e)}
                />
                </div>
                <div className="form-group">
                 <input 
                name="wishList"
                placeholder="Wish List" 
                value={this.state.wishList} 
                onChange={e => this.change(e)}
                />
                </div>
                <button onClick={(e) => this.onSubmit()}>Submit</button>

            </form>
            </div>
        )
    }
}

