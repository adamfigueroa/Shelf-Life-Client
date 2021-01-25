import React from "react";
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="headerBox">
      <h1>
        <Link to="/" className="headerText">
          Shelf Life
        </Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
