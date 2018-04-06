import React from 'react';
import ReactDOM from 'react-dom';
import DemoComponent from './DemoComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
