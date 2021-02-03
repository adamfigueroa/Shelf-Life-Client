import React, { Component } from "react";
import AppContext from "../../context/AppContext";
import ItemApiService from "../../services/item-api-service";
import moment from "moment";
import { Link } from "react-router-dom";

class DashBoardList extends Component {
  static contextType = AppContext;

  state = {
    error: false,
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
    const newDate = moment(item.count_down_date).add(addDays, "days");

    const countdown = newDate.fromNow();
    return ("Expires " + countdown);
  };

  loadItems = () => {
    const userItems = this.context.items.map((item) => {
      return (
        <li className="itemCardLi"  id={item.id} key={item.id}>
          <Link to={`api/items/${item.id}`}> 
          <div className="itemCard">
            <h4>{item.item_name}</h4>
            {this.calculateCountdownDate(item)}
          </div>
          </Link>
        </li>
      );
    });
    return userItems;
  };

  render() {
    return (
      <div className="dashboardBox">
        <h2>My Fridge</h2>
        <ul className="resultsList">{this.loadItems()}</ul>
      </div>
    );
  }
}

export default DashBoardList;
