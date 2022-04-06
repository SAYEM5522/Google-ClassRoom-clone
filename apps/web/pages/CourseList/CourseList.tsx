import React, { useEffect } from 'react';
import Course from './Course';
import styles from "../css/CourseList/CourseList.module.css"
import {data} from "../Data"
import axios from 'axios';
const CourseList = () => {
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
      
  return <div className={styles.course__list}>
        {
          CourseList.map((course,index) => <Course key={course.id} course={course}/>)
        }
  </div>;
};

export default CourseList;
