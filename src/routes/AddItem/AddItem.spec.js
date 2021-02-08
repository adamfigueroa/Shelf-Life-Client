import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AddItem component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path="/additem" exact component={AddItem} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});