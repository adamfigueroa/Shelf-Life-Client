import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DashSideBar from './DashSideBar';

describe('DashSideBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <BrowserRouter>
      ReactDOM.render(
      <DashSideBar />, div);
    </BrowserRouter>;
    ReactDOM.unmountComponentAtNode(div);
  });
});
