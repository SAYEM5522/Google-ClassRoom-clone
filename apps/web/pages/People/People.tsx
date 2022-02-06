import React from 'react';
import CourseHeader from '../Course/CourseHeader';
import styles from "../css/People/People.module.css";
import ClassMates from './ClassMates';
import Teacher from './Teacher';
const People = () => {
  return <div>
   <CourseHeader/>
   <div className={styles.people__list}>
      <Teacher/>
      <ClassMates/>
   </div>
  </div>;
};

export default People;
