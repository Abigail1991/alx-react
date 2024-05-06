import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

it('renders without crashing', () => {
  shallow(<NotificationItem />);
});

it('renders the correct html with dummy type and value props', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test" />);
  const li = wrapper.find('li');
  expect(li.text()).toEqual('test');
  expect(li.prop('data-notification-type')).toEqual('default');
});

it('renders the correct html with dummy html prop', () => {
  const wrapper = shallow(
    <NotificationItem html={{ __html: '<u>test</u>' }} />,
  );
  const li = wrapper.find('li');
  expect(li.html()).toEqual(
    '<li data-notification-type="default"><u>test</u></li>',
  );
});

it('markAsRead spy is called with the right arguments when clicking on the component', () => {
  const markAsReadSpy = jest.fn();
  const wrapper = shallow(
    <NotificationItem
      id="1"
      type="default"
      value="test"
      markAsRead={markAsReadSpy}
    />,
  );
  wrapper.find('li').simulate('click');
  expect(markAsReadSpy).toHaveBeenCalledWith('1');
});
