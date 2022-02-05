import React, { useCallback } from 'react';
import styles from "../css/SideBar/SideBar.module.css"
import CourseName from './CourseName';

const SIdeBar = ({setOpen}) => {
  const onClick=useCallback(()=>{
        setOpen(false)
  },[])
  return <div className={styles.sidebar}>
          <div className={styles.sidebar__classes}>
              <h2 onClick={onClick}>Classes</h2>
          </div>
          <div className={styles.sidebar__calender}>

          </div>
          <div className={styles.sidebar__coursename}>
                <CourseName/>
                <CourseName/>
                <CourseName/>
                <CourseName/>
          </div>

  </div>;
};

export default SIdeBar;
