import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

it('renders without crashing', () => {
  shallow(<CourseList listCourses={[]} />);
});

it('renders without crashing', () => {
  shallow(<CourseList />);
});
