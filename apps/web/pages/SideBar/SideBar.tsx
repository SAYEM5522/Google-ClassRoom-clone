import React from 'react';
import styles from "../css/SideBar/SideBar.module.css"
import CourseName from './CourseName';
const SIdeBar = () => {
  return <div className={styles.sidebar}>
          <div className={styles.sidebar__classes}>

          </div>
          <div className={styles.sidebar__calender}>

          </div>
          <div className={styles.sidebar__coursename}>
                <CourseName/>
          </div>

  </div>;
};

export default SIdeBar;
