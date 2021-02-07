import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";

class LoginForm extends Component {
  state = { error: null };

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const user_name = e.target.username;
    const password = e.target.password;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    return (
      <div className="loginBox">
        <h2>Sign in</h2>
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
        <div className='demoLogin'>
          <h3>Give Shelf Life a try!</h3>
          <p>Username: test@testerson.com</p>
          <p>Password: Password!1</p>
        </div>
      </div>
    );
  }
};

export default LoginForm;
