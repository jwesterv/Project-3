import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import axios from "axios";


class ProfileForm extends React.Component {

    //birthday: DataTypes.STRING,
    // phone: DataTypes.STRING,
    // address: DataTypes.STRING,
    // email: DataTypes.STRING


    constructor(props) {
        super(props);
        this.state = {
            birthday: '',
            phone: '',
            address: '',
            email: '',

        }
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleBirthdayChange(event) {
        console.log(event.target.value)
        this.setState({ birthday: event.target.value });

    };
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });

    };

    handleAddressChange(event) {
        this.setState({ address: event.target.value });

    };

    handleEmailChange(event) {
        this.setState({ email: event.target.value });

    };

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
        // alert('Your profile has been submitted!');

        axios.post("/api/profile", {
            birthday: this.state.birthday,
            phone: this.state.phone,
            address: this.state.address,
            email: this.state.email
        })
            .then(function (response) {
                console.log("profile" + response);
            })
            .catch(function (error) {
                console.log(error);
            });
        //
    }
    render() {
        return (
            <div>
            <br></br>
            
                {this.state.birthday}
                <br></br>
                {this.state.phone}
                <br></br>
                {this.state.address}
                <br></br>
                {this.state.email}

            
            <br></br>

            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Birthday</label>
                <input type="text" value={this.state.birthday} onChange={this.handleBirthdayChange} />
                <br></br>
                <label>Phone</label>
                <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
                <br></br>
                <label>Address</label>
                <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
                <br></br>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={this.handleEmailChange} />

                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    } c
}

export default ProfileForm;
