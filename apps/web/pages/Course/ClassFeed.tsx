import React from 'react';
import styles from "../css/Course/ClassFeed.module.css"
import Announc from './Announc';
import ClassDetails from './ClassDetails';
import Feed from './Feed';
import Upcaming from './Upcaming';
const ClassFeed = () => {
  return <div className={styles.classfeed}>
            <ClassDetails/>
            <div className={styles.classfeed__middle}>
              <Upcaming/>
              <Announc/>
             
            </div>
                   <Feed/>
                   <Feed/>
                   <Feed/>           

  </div>;
};

export default ClassFeed;
