import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import ItemApiService from '../../services/item-api-service';
import moment from 'moment';
import { Link } from 'react-router-dom';

class DashBoardList extends Component {
  static contextType = AppContext;

  state = {
    error: false,
    sort: '',
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

  // Add days to expire + countdown date to determine which date to countdown from, then check to see if it is expired.
  calculateCountdownDate = (item) => {
    const addDays = item.days_until_expire;
    const newDate = moment(item.count_down_date).add(addDays, 'days');
    const countdown = newDate.fromNow();
    let sortNum = countdown.match(/\d+/);
    if (sortNum === null) {
      sortNum = 1;
    }
    if (countdown.includes('ago')) {
      const iName = item.item_name;
      const iNameSlice = iName.slice(-1);
      if (iNameSlice === 's') {
        return (
          <div>
            <p className="expired">
              {item.item_name} have expired {countdown}
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <p className="expired">
              {item.item_name} has expired {countdown}
            </p>
          </div>
        );
      }
    } else {
      return (
        <div>
          <p className="expireTracker">Expires {countdown}</p>
        </div>
      );
    }
  };

  loadItems = () => {
    const userItems = this.context.items
      .sort((i1, i2) => {
        if (this.state.sort === '') return true;
        const date1 = moment(i1.count_down_date).add(
          i1.days_until_expire,
          'days'
        );
        const date2 = moment(i2.count_down_date).add(
          i2.days_until_expire,
          'days'
        );
        const difference = date1 - date2;
        if (this.state.sort === 'ascending') {
          return difference;
        } else return -difference;
      })
      .map((item) => {
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
    if (userItems === []) {
      return <li className="noItemsBox">No current items to track</li>;
    } else return userItems;
  };

  handleSortChange = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    return (
      <div className="dashboardBox">
        <div className="titleBox">
          <h2>My Fridge</h2>
          <form className="filterList" onChange={this.handleSortChange}>
            <select name="sort" id="sort">
              <option value="">Sort by</option>
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
