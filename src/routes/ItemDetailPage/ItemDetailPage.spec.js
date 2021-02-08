import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetailPage from './ItemDetailPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('ItemDetailPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/items/:itemId'} component={ItemDetailPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});