import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    <BrowserRouter>
      ReactDOM.render(
      <Header />, div);
    </BrowserRouter>;
    ReactDOM.unmountComponentAtNode(div);
  });
});
