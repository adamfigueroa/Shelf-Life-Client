import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemApiService from '../../services/item-api-service';
import AppContext from '../../context/AppContext';
import './AddItem.css';

class AddItem extends Component {
  static contextType = AppContext;
  state = { error: null };

  componentDidMount() {
    this.setState({ loading: true });
    ItemApiService.fetchUserItems()
      .then((items) => {
        this.context.setItems(items);
        if (items.length < 1) {
          this.setState({ empty: true });
        } else {
          this.setState({ empty: false });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  dashboardRedirect = () => {
    this.props.history.push();
  };

  handleItemSubmit = (e) => {
    e.preventDefault();
    const { customitem, itemnumber } = e.target;
    this.setState({ error: null });

    ItemApiService.addItem({
      item_name: customitem.value,
      days_until_expire: itemnumber.value,
    })
      .then((item) => {
        customitem.value = '';
        itemnumber.value = '';
      })
      .then(alert(`${customitem.value} has been added`))
      .catch((res) => {
        this.setState({ error: res });
      });
  };

  loadExistingItems = () => {
    const userItems = this.context.items.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.item_name} with {item.days_until_expire} days left
        </option>
      );
    });
    return userItems;
  };

  handleExistingItemSubmit = (e) => {
    e.preventDefault();
    let existingItem = this.context.items.find((item) => {
      if (item.id === parseInt(this.state.currentItemId)) {
        return true;
      } else return false;
    });

    if (existingItem === undefined) {
      this.setState({
        error: 'No item with specified Id',
      });
      return;
    }
    const { item_name, days_until_expire } = existingItem;
    this.setState({ error: null });
    ItemApiService.addItem({
      item_name: item_name,
      days_until_expire: days_until_expire,
    })
      .then(alert(`${item_name} has been added`))
      .catch((res) => {
        this.setState({ error: res });
      });
  };

  handleExistingItemChange = (e) => {
    this.setState({
      currentItemId: e.target.value,
    });
  };

  render() {
    return (
      <section className="dashboardPage">
        <div className="additemWindow">
          <div className="cancelSidebar">
            <Link to="/dashboard">
              <button className="backBtn">Back</button>
            </Link>
          </div>
          <div className="addItemBox">
            <form
              className="addItemForm"
              onSubmit={this.handleExistingItemSubmit}
            >
              <label htmlFor="additem">Add an existing item:</label>
              <select
                className="addItemDropdown"
                name="additem"
                onChange={this.handleExistingItemChange}
              >
                <option value="">Select Item</option>
                {this.loadExistingItems()}
              </select>
              <button className="addExistingItemForm">Add</button>
            </form>
            <form
              className="addCustomItemForm"
              onSubmit={this.handleItemSubmit}
            >
              <label htmlFor="customitem">Add a new item:</label>
              <input type="text" className="itemName" name="customitem" />
              <label htmlFor="itemnumber">
                How many days until item expires:
              </label>
              <input type="number" className="itemNumber" name="itemnumber" />
              <button className='addCustomItemBtn'>Add</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AddItem;
