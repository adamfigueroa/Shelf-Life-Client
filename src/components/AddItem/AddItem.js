import React from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import "./AddItem.css";

const AddItem = () => {
  return (
    <section className="dashboardPage">
      <Header />
      <div className="additemWindow">
        <div className="cancelSidebar">
          <Link to="/dashboard">
            <button className="cancelBtn">Cancel</button>
          </Link>
        </div>
        <div className="addItemBox">
          <form className="addItemForm">
            <label htmlFor="additem">Add an existing item:</label>
            <select className="addItemDropdown" name="additem">
            <option value="">Select Item</option>
              <option value="apples">Apples</option>
              <option value="cake">Cake</option>
              <option value="kale">Kale</option>
              <option value="breadloaf">Bread Loaf</option>
            </select>
            <button>Add</button>
          </form>
          <form className="addCustomItemForm">
            <label htmlFor="customitem">Add a new item:</label>
            <input type="text" className="itemName" name="customitem"/>
            <label htmlFor="itemnumber">How many days until item expires:</label>
            <input type="number" className="itemNumber" name="itemnumber" />
            <button>Add</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
