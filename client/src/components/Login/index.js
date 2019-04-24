import React, { Component } from 'react';


class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="center">
          
                <div className="card">
                    <h1>Login</h1>
                    <form>
                        <input
                            className="username-form"
                            placeholder="Enter username"
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="password-form"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="submit-form"
                            value="Submit"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;