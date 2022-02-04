import React from 'react';
import styles from "../css/Course/ClassFeed.module.css"
import Announc from './Announc';
import ClassDetails from './ClassDetails';
import Upcaming from './Upcaming';
const ClassFeed = () => {
  return <div className={styles.classfeed}>
            <ClassDetails/>
            <div className={styles.classfeed__middle}>
              <Upcaming/>
              <Announc/>
            </div>
  </div>;
};

export default ClassFeed;
