import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should contain App-header div', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-header')).toHaveLength(1);
});

it('should contain App-body div', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-body')).toHaveLength(1);
});
it('should contain App-footer div', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-footer')).toHaveLength(1);
});
