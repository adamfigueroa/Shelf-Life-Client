import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import LoginPage from "./LoginPage/LoginPage"
import DashBoard from "./DashBoard/DashBoard"
import AddItem from "./AddItem/AddItem"


function App() {
  return (
    <main className='App'>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/dashboard" exact component={DashBoard}/>
      <Route path="/additem" exact component={AddItem}/>
    </main>
  );
}

export default App;