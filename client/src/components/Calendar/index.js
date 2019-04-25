import React, { Component } from 'react';
import Calendar from "./Calendar/Calendar"
import Header from '../Header';
import TextField from '@material-ui/core/TextField';
import "./style.css"

class CalendarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


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

    axios.post("/api/calendar", {
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


  
  render() {
    return (
      <div className="App">
      <Header />
       <main>
          <Calendar />
        </main>
        <form className="calendar-input" autoComplete="off">
          <TextField
            id="outlined-event"
            label="Event Name"
            className="event"
            value=""
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventStart"
            label="Event Start"
            className="eventStart"
            type="date"
            value="4-27-2019"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventEnd"
            label="Event End"
            className="eventEnd"
            type="date"
            value= "4-27-2019"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventTime"
            label="Event Time"
            className="eventEnd"
            type="time"
            value="10:00"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventDescription"
            label="Description"
            className="eventDescription"
            value=""
            margin="normal"
            variant="outlined"
          />
          <button variant ="outlined" className="submit-button" type="submit" value="submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default CalendarComponent;

