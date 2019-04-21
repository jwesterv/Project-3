import React, { Component } from 'react';

import Calendar from "./Calendar/Calendar"

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

      </div>
    )
  }
}

export default CalendarComponent;

