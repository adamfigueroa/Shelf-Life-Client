import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./utilities/PublicRoute";
import PrivateRoute from "./utilities/PrivateRoute";
import AppContext from "./context/AppContext";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import DashBoard from "./routes/DashBoard/DashBoard";
import AddItem from "./components/AddItem/AddItem";
import Header from "./components/Header/Header";
import ItemDetailPage from "./routes/ItemDetailPage/ItemDetailPage";
import Footer from './components/Footer/Footer'
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
        <Route path="/" component={Footer} />
      </main>
    );
  }
}

export default App;
