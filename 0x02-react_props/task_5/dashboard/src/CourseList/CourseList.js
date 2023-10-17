import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import './CourseList.css';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      {listCourses.length > 0 ? (
        <>
          <thead>
            <CourseListRow
              textFirstCell={'Available courses'}
              isHeader={true}
            />
            <CourseListRow
              textFirstCell={'Course name'}
              textSecondCell={'Credit'}
              isHeader={true}
            />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        </>
      ) : (
        <tbody>
          <CourseListRow textFirstCell={'No course available yet'} />
        </tbody>
      )}

      <tbody></tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
