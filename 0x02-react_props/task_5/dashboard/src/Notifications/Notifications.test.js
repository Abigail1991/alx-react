import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

it('renders without crashing', () => {
  shallow(<Notifications />);
});

it('menuItem is displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.menuItem').length).toBe(1);
});

it('Notifications is not displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.Notifications').length).toBe(0);
});

it('menuItem is displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  expect(wrapper.find('div.menuItem').length).toBe(1);
});

it('Notifications is displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  expect(wrapper.find('div.Notifications').length).toBe(1);
});
