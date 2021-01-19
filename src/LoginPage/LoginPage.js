import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <section className="loginPage">
      <Header />
      <div className="loginBox">
        <h3>Sign in</h3>
        <form className="loginForm">
          <label htmlFor="username">Username:</label>
          <input type="text" className="userName" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" className="passWord" name="password" />
          <Link to="/dashboard">
            <button className="loginBtn">Login</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
