import React from "react";
import { Link } from "react-router-dom";

const EditItemSideBar = () => {
  return (
    <div className="dSidebar">
      <Link to="/dashboard">
        <button className="backBtn">Back</button>
      </Link>
    </div>
  );
};

export default EditItemSideBar;
