import React, { Component } from 'react';

import Calendarmodel from "./CalendarModel/Calendarmodel"

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

      </div>
    )
  }
}

export default Calendar;

