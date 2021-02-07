import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";

class SignUpForm extends Component {
  state = { error: null };

  handleSignUp = (e) => {
    e.preventDefault();
    const { fName, lName, username, password } = e.target;
    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: fName.value,
      last_name: lName.value,
      user_name: username.value,
      password: password.value,
    })
      .then((user) => {
        fName.value = "";
        lName.value = "";
        username.value = "";
        password.value = "";
        this.props.registerRedirect();
      })
      .catch((res) => {
        this.setState({ error: res });
      });
  };

  render() {
    return (
      <div className="formBox">
        <h3>Wanna give it a try? Sign-up below:</h3>
        <form className="signupForm" onSubmit={this.handleSignUp}>
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
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            className="username"
            name="username"
            placeholder="Email"
            required
          />
          <label htmlFor="password">Password:</label>
          <input type="password" className="pass" name="password" required />
          <button type="submit" className='registerSubmit'>Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
