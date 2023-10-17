import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

it('isHeader is true, renders one cell with colspan = 2', () => {
  const wrapper = shallow(
    <CourseListRow isHeader={true} textFirstCell="test" />,
  );
  expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  expect(wrapper.find('th').text()).toEqual('test');
});

it('isHeader is true, renders two cells with text inside', () => {
  const wrapper = shallow(
    <CourseListRow
      isHeader={true}
      textFirstCell="test"
      textSecondCell="secondTest"
    />,
  );
  expect(wrapper.find('th').at(0).text()).toEqual('test');
  expect(wrapper.find('th').at(1).text()).toEqual('secondTest');
});

it('isHeader is false, renders two cells within a tr element', () => {
  const wrapper = shallow(
    <CourseListRow textFirstCell="i'm first" textSecondCell="i'm second" />,
  );
  expect(wrapper.find('td').at(0).text()).toEqual("i'm first");
  expect(wrapper.find('td').at(1).text()).toEqual("i'm second");
  expect(wrapper.find('tr').length).toEqual(1);
});
