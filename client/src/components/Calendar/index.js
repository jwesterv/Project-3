import React, { Component } from 'react';

import Calendarmodel from "./CalendarModel/Calendarmodel"

import TextField from '@material-ui/core/TextField';



import "./style.css"

class Calendar extends Component {
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
          <Calendarmodel />
        </main>
        <form className="calendar-input" autoComplete="off">
          <TextField
            id="outlined-event"
            label="Event"
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

export default Calendar;

