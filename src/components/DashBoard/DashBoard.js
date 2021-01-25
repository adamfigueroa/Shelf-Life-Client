import React from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <section className="dashboardPage">
      <Header />
      <div className="dashboardWindow">
        <div className="dSidebar">
          <Link to="/additem">
            <button className="addItemBtn">Add New Item</button>
          </Link>
        </div>
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
      </div>
    </section>
  );
};

export default DashBoard;
