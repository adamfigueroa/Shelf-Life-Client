import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./utilities/PublicRoute";
import PrivateRoute from "./utilities/PrivateRoute";
import AppContext from "./context/AppContext";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import DashBoard from "./components/DashBoard/DashBoard";
import AddItem from "./components/AddItem/AddItem";
import Header from "./components/Header/Header";
import ItemDetailPage from "./components/ItemDetailPage/ItemDetailPage";
import './App.css'


class App extends Component {
  state = {
    items: [],
    hasError: false,
    userLoggedIn: false,
  };

  setItems = (items) => {
    this.setState({ items });
  };

  render() {
    return (
      <main className="App">
        <Route path="/" component={Header} />
        <AppContext.Provider
          value={{
            items: this.state.items,
            setItems: this.setItems,
          }}
        >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <PublicRoute path="/login" exact component={LoginPage} />
            <PrivateRoute path="/dashboard" exact component={DashBoard} />
            <PrivateRoute path="/additem" exact component={AddItem} />
            <PrivateRoute path="/items/:itemId" component={ItemDetailPage} />
          </Switch>
        </AppContext.Provider>
      </main>
    );
  }
}

export default App;
