import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './DashBoard.spec.js';
import { BrowserRouter, Route } from 'react-router-dom';

describe('DashBoard component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/dashboard'} component={DashBoard} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});