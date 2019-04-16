import React from "react";

import Calendar from "../../components/Calendar"

import "./style.css"


function Calendar() {
    return (
        <div className="Calendar">
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

export default Calendar;

