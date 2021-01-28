import React, { Component } from "react";
import AppContext from "../../context/AppContext";
import ItemApiService from "../../services/item-api-service";
import Moment from "react-moment"
import moment from "moment";

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
    const startDate = moment(`${item.count_down_date}`);
    const addDays = item.days_until_expire
    const newDate = startDate.add(`${addDays}`, 'days')
    
    const countdown = moment({newDate}, "DDMMYYYY").fromNow();

    console.log(startDate)
    console.log(newDate)
    console.log(countdown)
    return countdown;
  };

  loadItems = () => {
    const userItems = this.context.items.map(item => {
      return (
        <li>
          <div className="itemCard" id>
            <h4>{item.item_name}</h4>
            <Moment element="p" date={this.calculateCountdownDate(item)} durationFromNow/>
          </div>
        </li>
      )
    })
    return userItems;
  }

  render() {
    return (
      <div className="dashboardBox">
        <h2>My Fridge</h2>
        <ul className="resultsList">
          {this.loadItems()}
        </ul>
      </div>
    );
  }
}

export default DashBoardList;
