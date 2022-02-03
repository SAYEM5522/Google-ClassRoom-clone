import React from 'react';
import Course from './Course';
import styles from "../css/CourseList/CourseList.module.css"
import {data} from "../Data"
const CourseList = () => {
  return <div className={styles.course__list}>
        {
          data.map((course,index) => <Course key={course.id} course={course}/>)
        }
  </div>;
};

export default CourseList;
