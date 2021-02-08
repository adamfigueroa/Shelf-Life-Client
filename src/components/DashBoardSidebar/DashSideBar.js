import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const DashSideBar = () => {
  return (
    <div className="dSidebar">
      <Link to="/additem">
        <button className="addItemBtn">Add New Item</button>
      </Link>
    </div>
  );
};

export default DashSideBar;
