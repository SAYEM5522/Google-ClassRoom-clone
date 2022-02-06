import React, { useCallback } from 'react';
import styles from "../css/SideBar/SideBar.module.css"
import CourseName from './CourseName';
import SideBarTop from './SideBarTop';
import {CgHomeAlt} from "react-icons/cg";
import {BiCalendarAlt} from "react-icons/bi";

const SIdeBar = ({setOpen}) => {
  return <div className={styles.sidebar}>
          <div className={styles.sidebar__top}>
              <SideBarTop name={"Classes"} Icon={CgHomeAlt} setOpen={setOpen} />
              <SideBarTop name={"Calendar"} Icon={BiCalendarAlt}/>
              <div className={styles.sidebar__line}/>

          </div>
          <div className={styles.sidebar__middle}>
                <CourseName/>
                <CourseName/>
                <CourseName/>
                <CourseName/>
          </div>
          <div className={styles.sidebar__bottom}>

          </div>

  </div>;
};

export default SIdeBar;
