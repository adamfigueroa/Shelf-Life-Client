import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import ItemApiService from '../../services/item-api-service';
import moment from 'moment';
import { Link } from 'react-router-dom';

class DashBoardList extends Component {
  static contextType = AppContext;

  state = {
    error: false,
    filter: false,
  };

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

  calculateCountdownDate = (item) => {
    const addDays = item.days_until_expire;
    const newDate = moment(item.count_down_date).add(addDays, 'days');
    const countdown = newDate.fromNow();
    const sortNum = countdown.match(/\d+/);
    if (countdown.includes('ago')) {
      return (
        <p className="expired">
          {item.item_name} has expired {countdown}
        </p>
      );
    } else {
      return (
        <div>
          <p className="expireTracker">Expires {countdown}</p>
          <p className="sortNum hidden">{sortNum}</p>
        </div>
      );
    }
  };

  loadItems = () => {
    const userItems = this.context.items.map((item) => {
      return (
        <li className="itemCardLi" id={item.id} key={item.id}>
          <Link to={`/items/${item.id}`}>
            <div className="itemCard" title="Click here to see details">
              <h4>{item.item_name}</h4>
              {this.calculateCountdownDate(item)}
            </div>
          </Link>
        </li>
      );
    });
    console.log(userItems)
    if (userItems === []) {
      return <li className="noItemsBox">No current items to track</li>;
    } else return userItems;
  };

  sortList = (sortType) => {};

  render() {
    return (
      <div className="dashboardBox">
        <div className='titleBox'>
          <h2>My Fridge</h2>
          <form className="filterList">
            <select name="filter" id="filter">
              <option value="">Filter by</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </form>
        </div>
        <ul className="resultsList">{this.loadItems()}</ul>
      </div>
    );
  }
}

export default DashBoardList;
