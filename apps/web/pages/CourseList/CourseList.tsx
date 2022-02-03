import React from 'react';
import Course from './Course';
import styles from "../css/CourseList/CourseList.module.css"
const CourseList = () => {
  return <div className={styles.course__list}>
          <Course/>
          <Course/>
           <Course/> 
           <Course/>
           <Course/>
  </div>;
};

export default CourseList;
