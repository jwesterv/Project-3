import React, { Component } from 'react';
import Calendar from "./Calendar/Calendar"
import Navbar from '../../components/NavBar'
import "./style.css"

class CalendarComponent extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
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

