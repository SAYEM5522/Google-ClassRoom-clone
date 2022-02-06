import React, { useCallback } from 'react';
import styles from "../css/SideBar/SideBar.module.css"
import CourseName from './CourseName';
import SideBarTop from './SideBarTop';
import {CgHomeAlt} from "react-icons/cg";
import {BiCalendarAlt} from "react-icons/bi";
import {BsCardChecklist} from "react-icons/bs";

const SIdeBar = ({setOpen}) => {
  return <div className={styles.sidebar}>
          <div className={styles.sidebar__top}>
              <SideBarTop name={"Classes"} Icon={CgHomeAlt} setOpen={setOpen} current={true} />
              <SideBarTop name={"Calendar"} Icon={BiCalendarAlt}/>
              <div className={styles.sidebar__line}/>

          </div>
          <div className={styles.sidebar__middle}>
                <h3 className={styles.sidebar__middle__top}>Enrolled</h3>
                <div className={styles.sidebar__middle__todo}>
                        <BsCardChecklist size={21.5}/>
                        <h3>To-do</h3>
                </div>
                <CourseName name={"CSE311.8 Spring 2022"} section={8} background={"#007b83"}/>
                <CourseName name={"ECO101.18 Spring 2022"} section={10} background={"#1967d2"}/>
                <CourseName name={"MAT361.11 Spring 2022"} section={11}  background={"#202124"}/>
                <CourseName name={"CSE311.8 Spring 2022"} section={18}  background={"#137333"}/>
                <CourseName name={"CSE311.8 Spring 2022"} section={21}  background={"#1967d2"}/>
                <CourseName name={"BEN201.8 Spring 2022"} section={20}  background={"#137333"}/>
                <CourseName name={"BEN201.8 Spring 2022"} section={20}  background={"#137333"}/>


          </div>
          <div className={styles.sidebar__bottom}>

          </div>

  </div>;
};

export default SIdeBar;
