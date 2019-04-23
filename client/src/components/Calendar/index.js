import React, { Component } from 'react';

import Calendar from "./Calendar/Calendar"

import TextField from '@material-ui/core/TextField';



import "./style.css"

class CalendarComponent extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            {/* <span className="icon">date_range</span> */}
            <span>
              FAM.<b>ily</b>
            </span>
          </div>
        </header>
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

        </form>
      </div>
    )
  }
}

export default CalendarComponent;

