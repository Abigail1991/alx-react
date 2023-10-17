import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

it('renders without crashing', () => {
  shallow(<CourseList />);
});

it('should contain five differents rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find('CourseListRow').length).toBe(5);
});
