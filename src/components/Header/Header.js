import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";

class Header extends Component {
  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  renderLoginBtn() {
    return (
      <div className="navBarLogin">
        <Link to={"/login"}>
          <li>Login</li>
        </Link>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
      </div>
    );
  }

  renderLogoutBtn() {
    return (
      <div className="navBarLogout">
        <Link to={""} onCLick={this.handleLogout}>
          <li>Logout</li>
        </Link>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header className="headerBox">
        <h1>
          <Link to="/" className="headerText">
            Shelf Life
          </Link>
        </h1>
        <ul id="nav">
          {TokenService.hasAuthToken()
            ? this.renderLogoutBtn()
            : this.renderLoginBtn()}
        </ul>
      </header>
    );
  }
}

export default Header;
