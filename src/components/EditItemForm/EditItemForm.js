import React, { Component } from "react";


class EditItemForm extends Component {
  state = { error: null };

  ;

  render() {
    return (
      <div className="loginBox">
        <h3>Sign in</h3>
        <form className="loginForm" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username:</label>
          <input type="text" className="userName" name="username" required />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="passWord"
            name="password"
            required
          />
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
      </div>
    );
  }
};

export default EditItemForm;