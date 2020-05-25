import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  FirstSharedComponent,
  SecondSharedComponent,
  ThirdSharedComponent,
} from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FirstSharedComponent />, div);
    ReactDOM.render(<SecondSharedComponent />, div);
    ReactDOM.render(<ThirdSharedComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
