import React, {Component} from 'react';
import "./style.css"
import Navbar from '../../components/NavBar'


export default class ProfileJoin extends React.Component {
    state = {
        familyId: "",
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
            familyId: "",
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
            <div>
                <Navbar />
            <div align="center">
            <form>
                 <div className="form-group">
                <input 
                name="familyId"
                placeholder="Family Id" 
                value={this.state.familyId} 
                onChange={e => this.change(e)}
                />
                </div>
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
                name="wishLIst"
                placeholder="Wish List" 
                value={this.state.wishList} 
                onChange={e => this.change(e)}
                />
                </div>
                <button onClick={(e) => this.onSubmit()}>Submit</button>

            </form>
            </div>
            </div>
        )
    }
}

