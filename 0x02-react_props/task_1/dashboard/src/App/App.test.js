import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should contain the Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Notifications')).toHaveLength(1);
});

it('should contain the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Header')).toHaveLength(1);
});

it('should contain the Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Login')).toHaveLength(1);
});

it('should contain the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Footer')).toHaveLength(1);
});
