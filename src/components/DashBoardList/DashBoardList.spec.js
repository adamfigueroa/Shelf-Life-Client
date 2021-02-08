import React from 'react';
import ReactDOM from 'react-dom';
import DashBoardList from './DashBoardList';

describe('DashBoardList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashBoardList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});