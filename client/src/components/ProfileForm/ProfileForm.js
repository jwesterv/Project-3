import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Navbar from '../../components/NavBar';



class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            birthday: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            st: '',
            zip: '',
           
        }

         
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStChange = this.handleStChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });

    };

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });

    };

    handleBirthdayChange(event) {
        console.log(event.target.value)
        this.setState({ birthday: event.target.value });

    };
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });

    };

    handleEmailChange(event) {
        this.setState({ email: event.target.value });

    };

    handleAddressChange(event) {
        this.setState({ address: event.target.value });

    };

    handleCityChange(event) {
        this.setState({ city: event.target.value });

    };

    handleStChange(event) {
        this.setState({ st: event.target.value });

    };

    handleZipChange(event) {
        this.setState({ zip: event.target.value });

    };

    

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
        alert('Your profile has been submitted!');

        axios.post("/api/profile", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthday: this.state.birthday,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            st: this.state.st,
            zip: this.state.zip
            
        })
            .then(function (response) {
                console.log("profile" + response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    
    render() {
        return (
            <div>
                <Navbar />
               {this.state.firstName}
                <br></br>
                {this.state.lastName}
                <br></br>
                {this.state.birthday}
                <br></br>
                {this.state.phone}
                <br></br>
                {this.state.email}
                <br></br>
                {this.state.address}
                <br></br>
                {this.state.city}
                <br></br>
                {this.state.st}
                <br></br>
                {this.state.zip}
                

            
            <br></br>

            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>First Name:</label>
                <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                <br></br>
                <label>Last Name:</label>
                <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                <br></br>
                <label>Birthday:</label>
                <input type="text" value={this.state.birthday} onChange={this.handleBirthdayChange} />
                <br></br>
                <label>Phone:</label>
                <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
                <br></br>
                <label>Email:</label>
                <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                <br></br>

                <label>Address:</label>
                <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
                <br></br>
                <label>City:</label>
                <input type="text" value={this.state.city} onChange={this.handleCityChange} />
                <br></br>
                <label>State:</label>
                <input type="text" value={this.state.st} onChange={this.handleStChange} />
                <br></br>
                <label>Zip Code:</label>
                <input type="text" value={this.state.zip} onChange={this.handleZipChange} />
                <br></br>


                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    } c
}

export default ProfileForm;
