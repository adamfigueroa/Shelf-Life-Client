import React, { Component } from 'react';
import ItemApiService from '../../services/item-api-service';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import './ItemDetailPage.css';

class ItemDetailPage extends Component {
  state = { error: false };

  componentDidMount() {
    ItemApiService.fetchItemById(this.props.match.params.itemId).then((res) => {
      this.setState({
        name: res.item_name,
        expireDays: res.days_until_expire,
        countDate: res.count_down_date,
      });
    });
  }

  render() {
    return (
      <div className="detailWindow">
        <div className="detailBox">
          <h2 className="detailTitle">{this.state.name}</h2>
          <CountDownTimer
            name={this.state.name}
            expireDays={this.state.expireDays}
            countDate={this.state.countDate}
          />
          <div className="btnBar">
            <button className="editBtn">Edit</button>
            <button className="deleteBtn">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetailPage;
