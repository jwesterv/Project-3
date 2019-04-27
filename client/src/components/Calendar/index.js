import React, { Component } from 'react';
import Calendar from "./Calendar/Calendar"
import Header from '../Header';
import TextField from '@material-ui/core/TextField';
import "./style.css"
import axios from "axios";

class CalendarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event: "",
      eventStart: "",
      eventEnd: "",
      eventTime: "",
      description: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleEventStartChange = this.handleEventStartChange.bind(this);
    this.handleEventEndChange = this.handleEventEndChange.bind(this);
    this.handleEventTimeChange = this.handleEventTimeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

  }
  handleEventChange(event) {
    this.setState({ event: event.target.value });
  };

  handleEventStartChange(event) {
    this.setState({ eventStart: event.target.value });
  };

  handleEventEndChange(event) {
    this.setState({ eventEnd: event.target.value });
  };

  handleEventTimeChange(event) {
    this.setState({ eventTime: event.target.value });
  };

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  };


  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    alert('Calendar event submitted!');

    axios.post("/api/calendar", {
      event: this.state.event,
      eventStart: this.state.eventStart,
      eventEnd: this.state.eventEnd,
      eventTime: this.state.eventTime,
      description: this.state.description,

    })
      .then(function (response) {
        console.log("Calendar event" + response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Calendar />
        </main>
<<<<<<< HEAD

        <form className="calendar-input" autoComplete="off">
=======
        <form onSubmit={this.handleSubmit.bind(this)}>
>>>>>>> 063ad606852771237f935b6ac1de14047544d4c9
          <TextField
            id="outlined-event"
            label="Event Name"
            className="event"
            value={this.state.event}
            onChange={this.handleEventChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventStart"
            label="Event Start"
            className="eventStart"
            type="date"
            value={this.state.eventStart}
            onChange={this.handleEventStartChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventEnd"
            label="Event End"
            className="eventEnd"
            type="date"
            value={this.state.eventEnd}
            onChange={this.handleEventEndChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventTime"
            label="Event Time"
            className="eventEnd"
            type="time"
            value={this.state.eventEnd}
            onChange={this.handleEventEndChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-eventDescription"
            label="Description"
            className="eventDescription"
            value={this.state.eventDescription}
            onChange={this.handleDescriptionChange}
            margin="normal"
            variant="outlined"
          />
          <input className="btn btn-primary-outline" type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}


export default CalendarComponent;