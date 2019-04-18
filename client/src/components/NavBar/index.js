import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                    <a class="dropdown-item" href="#">Chat</a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">Calendar</a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">Profile</a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">Setting</a>
                </div>

            </nav>
        )
    }
}
export default Navbar