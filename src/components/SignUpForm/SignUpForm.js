import React, { Component } from "react";


class SignUpForm extends Component {
  state = {};
  
    render() {
        return (
            <div className="formBox">
            <h3>Wanna give it a try? Sign-up below:</h3>
            <form className="signupForm">
              <label htmlFor="fName">First Name:</label>
              <input
                type="text"
                className="first"
                name="fName"
                placeholder="Name goes here"
                required
              />
              <label htmlFor="lName">Last Name:</label>
              <input
                type="text"
                className="last"
                name="lName"
                placeholder="Last name goes here"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="username"
                name="email"
                placeholder="Email"
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="pass"
                name="password"
                required
              />
              <button type="submit">Sign up</button>
            </form>
          </div>
        )
    }
}

export default SignUpForm;