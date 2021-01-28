import React, { Component } from "react";
import { Route } from "react-router-dom";
import PublicRoute from "./utilities/PublicRoute";
import PrivateRoute from "./utilities/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import DashBoard from "./components/DashBoard/DashBoard";
import AddItem from "./components/AddItem/AddItem";


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
        <Route path="/" exact component={HomePage} />
        <PublicRoute path="/login" exact component={LoginPage} />
        <PrivateRoute path="/dashboard" exact component={DashBoard} />
        <PrivateRoute path="/additem" exact component={AddItem} />
      </main>
    );
  }
}

export default App;
