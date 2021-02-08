import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditItemSideBar from './EditItemSideBar';

describe('EditItemSideBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <BrowserRouter>
      ReactDOM.render(
      <EditItemSideBar />, div);
    </BrowserRouter>;
    ReactDOM.unmountComponentAtNode(div);
  });
});
