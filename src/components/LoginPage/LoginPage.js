import React, { Component } from "react";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm"
import "./LoginPage.css";

class LoginPage extends Component {

  handleLoginSuccess = () => {
    this.props.history.push('dashboard')
  }

  

  render() {
    return (
      <section className="loginPage">
        <Header />
        <LoginForm handleLoginSuccess={this.handleLoginSuccess}/>
      </section>
    );
  }
};

export default LoginPage;
