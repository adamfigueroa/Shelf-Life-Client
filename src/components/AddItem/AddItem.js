import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemApiService from "../../services/item-api-service"
import "./AddItem.css";

class AddItem extends Component {
  state = { error: null };

  dashboardRedirect = () => {
    this.props.history.push()
  }

  handleItemSubmit = (e) => {
    e.preventDefault();
    const { customitem, itemnumber } = e.target;
    this.setState({ error: null });

    ItemApiService.addItem({
      item_name: customitem.value,
      days_until_expire: itemnumber.value
    })
    .then(item => {
      customitem.value = '';
      itemnumber.value = '';
    })
    .catch(res => {
      this.setState({ error:res });
    })
  }

  render() {
    return (
      <section className="dashboardPage">
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
            <form className="addCustomItemForm" onSubmit={this.handleItemSubmit}>
              <label htmlFor="customitem">Add a new item:</label>
              <input type="text" className="itemName" name="customitem" />
              <label htmlFor="itemnumber">
                How many days until item expires:
              </label>
              <input type="number" className="itemNumber" name="itemnumber" />
              <button>Add</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AddItem;
