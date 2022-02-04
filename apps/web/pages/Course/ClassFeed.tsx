import React from 'react';
import styles from "../css/Course/ClassFeed.module.css"
import ClassDetails from './ClassDetails';
const ClassFeed = () => {
  return <div className={styles.classfeed}>
            <ClassDetails/>
  </div>;
};

export default ClassFeed;
