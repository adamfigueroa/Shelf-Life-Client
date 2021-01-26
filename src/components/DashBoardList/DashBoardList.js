import React from "react";

const DashBoardList = () => {
  return (
    <div className="dashboardBox">
      <h2>My Fridge</h2>
      <ul className="resultsList">
        <li>
          <div className="itemCard">
            <h4>Apples</h4>
            <p className="expired">Days left: expired</p>
          </div>
        </li>
        <li>
          <div className="itemCard">
            <h4>Cake</h4>
            <p>Days left: 3</p>
          </div>
        </li>
        <li>
          <div className="itemCard">
            <h4>Kale</h4>
            <p>Days left: 5</p>
          </div>
        </li>
        <li>
          <div className="itemCard">
            <h4>Bread Loaf</h4>
            <p>Days left: 5</p>
          </div>
        </li>
        <li>
          <div className="itemCard expanded">
            <h4>Potatoes</h4>
            <p>7 Days 9 Hours 32 Minutes</p>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardList;
