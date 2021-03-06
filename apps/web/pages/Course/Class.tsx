import React from 'react';
import Header from '../Header/Header';
import ClassFeed from './ClassFeed';
import CourseHeader from './CourseHeader';
import styles from "../css/Course/Class.module.css";
import { useRouter } from 'next/router';
const Class = () => {
  return <div className={styles.class}>
    <CourseHeader/>
    <ClassFeed/>
  </div>;
};

export default Class;
