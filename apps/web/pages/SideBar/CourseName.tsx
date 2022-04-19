import { useRouter } from 'next/router';
import React from 'react';
import { useCallback } from 'react';
import styles from "../css/SideBar/CourseName.module.css"
interface CourseNameProps {
  course:{
    Section:string,
    Subject:string,
    Room:string,
    ClassName:string,
  }
}
const CourseName = ({course}:CourseNameProps) => {
  const router=useRouter()
  const onCLick=useCallback(()=>{
    router.push({
      pathname: "/Course/Class",
      query:{
        keyword:course.ClassName,
         Section:course.Section,
       }
     })
  },[])
  return <div className={styles.coursename} onClick={onCLick}>
    <div className={styles.coursename__img} style={{backgroundColor:"#137333"}}>{course.Subject.charAt(0)}</div>
    <div className={styles.coursename__details}>
    <h3 className={styles.coursename__name}>{course.ClassName}</h3>
    <p className={styles.coursename__section}>{course.Section}</p>
    </div>
  </div>;
};

export default CourseName;
