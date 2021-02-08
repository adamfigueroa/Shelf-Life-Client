import React from 'react';
import ReactDOM from 'react-dom';
import CountDownTimer from './CountDownTimer';

describe('CountDownTimer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountDownTimer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
