import React from 'react';
import { shallow, mount } from 'enzyme';
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

it('CourseList is not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('CourseList')).toHaveLength(0);
});

it('isLoggedIn is true, Login is not included, but CourseList yes', () => {
  const wrapper = shallow(<App isLoggedIn />);
  expect(wrapper.find('Login')).toHaveLength(0);
  expect(wrapper.find('CourseList')).toHaveLength(1);
});

it('calls an alert when control + h keys are pressed', () => {
  const events = {};
  window.alert = jest.fn();
  window.addEventListener = jest.fn().mockImplementation((event, cb) => {
    events[event] = cb;
  });

  const logOut = jest.fn();
  shallow(<App logOut={logOut} />);
  events.keydown({ ctrlKey: true, key: 'h' });

  expect(window.alert).toHaveBeenCalledWith('Logging you out');
  expect(logOut).toHaveBeenCalled();

  window.alert.mockRestore();
});
