import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { initialState } from './reducers/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing', () => {
  const component = shallow(<App state={initialState} />);
  expect(component.exists()).toEqual(true);
});
