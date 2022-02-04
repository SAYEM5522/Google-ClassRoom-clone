import React from 'react';
import styles from "../css/Course/CourseHeader.module.css";
import { FiMenu } from "react-icons/fi";

const CourseHeader = () => {
  return <div className={styles.courseheader}>
    <div className={styles.courseheader__left}>
      <FiMenu size={22}/>
      <div className={styles.courseheader__left__name}>
        <p className={styles.courseheader__left__coursename}>CSE311.8 Spring 2022</p>
        <p className={styles.courseheader__left__section}>8</p>
      </div>
    </div>
    <div className={styles.courseheader__middle}>

    </div>
    <div className={styles.courseheader__right}>

    </div>
  </div>;
};

export default CourseHeader;
