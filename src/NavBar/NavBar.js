import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <ul id="nav">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
