import React, { useCallback } from 'react';
import styles from "../css/SideBar/SideBar.module.css"
import CourseName from './CourseName';
import SideBarTop from './SideBarTop';
import {CgHomeAlt} from "react-icons/cg";
import {BiCalendarAlt} from "react-icons/bi";
import {BsCardChecklist} from "react-icons/bs";
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect } from 'react';
const SIdeBar = ({setOpen}) => {
  const [CourseList, setCourseList] = React.useState([]);
        const getClass=()=>{
                axios.get('http://localhost:5000/CreateClass')
                .then(res=>{
                    setCourseList(res.data)
                })
              }
             useEffect(()=>{
                getClass(),
                ()=> getClass() 
             },[])
  return <motion.div className={styles.sidebar} initial={{width:"0rem",opacity:0.8}} animate={{width:"19rem",opacity:1}} transition={{type:'tween',duration:0.25}} >
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
                {
                        CourseList.map((course,index) => <CourseName key={course.id} course={course}/>)
                }
                {/* <CourseName name={"CSE311.8 Spring 2022"} section={8} background={"#007b83"}/>
                <CourseName name={"ECO101.18 Spring 2022"} section={10} background={"#1967d2"}/>
                <CourseName name={"MAT361.11 Spring 2022"} section={11}  background={"#202124"}/>
                <CourseName name={"CSE311.8 Spring 2022"} section={18}  background={"#137333"}/>
                <CourseName name={"CSE311.8 Spring 2022"} section={21}  background={"#1967d2"}/>
                <CourseName name={"BEN201.8 Spring 2022"} section={20}  background={"#137333"}/>
                <CourseName name={"BEN201.8 Spring 2022"} section={20}  background={"#137333"}/> */}


          </div>
          <div className={styles.sidebar__line}/>

          <div className={styles.sidebar__bottom}>

          </div>

  </motion.div>;
};

export default SIdeBar;
