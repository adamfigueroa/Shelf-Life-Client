import React, { Component } from 'react';
import ItemApiService from '../../services/item-api-service';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import './ItemDetailPage.css';

class ItemDetailPage extends Component {
  state = {
    error: false,
    showEditForm: false,
    btnBar: 'btnBar',
  };

  componentDidMount() {
    ItemApiService.fetchItemById(this.props.match.params.itemId).then((res) => {
      this.setState({
        name: res.item_name,
        expireDays: res.days_until_expire,
        countDate: res.count_down_date,
        user_id: res.user_id,
      });
    });
  }

  onDeleteNote = () => {
    this.props.history.push('/dashboard');
  };

  handleClickDelete = (e) => {
    e.preventDefault();
    const itemId = Number(this.props.match.params.itemId);
    ItemApiService.deleteItem(itemId)
      .then(() => {
        this.onDeleteNote();
      })
      .catch((error) => {
        console.log('catch error', error);
        console.error({ error });
      });
  };

  addHiddenClass = () => {
    this.setState({ btnBar: 'btnBar hidden' });
  };

  removeHiddenClass = () => {
    this.setState({ btnBar: 'btnBar' });
  };

  openPopupHandler = () => {
    this.setState({ showEditForm: true });
    this.addHiddenClass();
  };

  closePopupHandler = () => {
    this.setState({ showEditForm: false });
    this.removeHiddenClass();
  };

  handleFormChange = (event) => {
    this.setState({ touched: true });
    this.setState({ [event.target.id]: event.target.value });
  };

  handleEditItem = (e) => {
    e.preventDefault();
    const itemId = Number(this.props.match.params.itemId);
    const editedItem = {
      item_name: this.state.name,
      days_until_expire: this.state.expireDays,
      count_down_date: this.state.countDate,
      user_id: this.state.user_id,
    };
    ItemApiService.editItem(editedItem, itemId)
      .then((res) => {
        console.log(res)
        if (res) {
          this.closePopupHandler();
        } else {
          this.setState({
            error: "Oh no! your edit didn't work, please refresh and try again",
          });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    let popup = null;
    if (this.state.showEditForm) {
      popup = (
        <form className="editItemForm" onSubmit={this.handleEditItem}>
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            className="editItemName"
            name="name"
            id="name"
            required
            onChange={(event) => this.handleFormChange(event)}
          >
            {/* {this.state.name} */}
          </input>
          <label htmlFor="expireDays">How many days until item expires:</label>
          <input
            type="number"
            className="itemNumber"
            name="expireDays"
            id="expireDays"
            placeholder={this.state.expireDays}
            required
            onChange={(event) => this.handleFormChange(event)}
          />
          <button className="editItemBtn">Edit</button>
          <button className="editItemCancel" onClick={this.closePopupHandler}>
            Cancel
          </button>
        </form>
      );
    }
    return (
      <div className="detailWindow">
        <div className="detailBox">
          <h2 className="detailTitle">{this.state.name}</h2>
          <CountDownTimer
            name={this.state.name}
            expireDays={this.state.expireDays}
            countDate={this.state.countDate}
          />
          {popup}
          <div className={this.state.btnBar} ref={this.divRef}>
            <button className="editBtn" onClick={this.openPopupHandler}>
              Edit
            </button>
            <button className="deleteBtn" onClick={this.handleClickDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetailPage;
