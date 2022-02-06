import React from 'react';
import styles from "../css/SideBar/CourseName.module.css"
interface CourseNameProps {
  name: string;
  section: number;
  background: string;
}
const CourseName = ({name,section,background}:CourseNameProps) => {
  return <div className={styles.coursename}>
    <div className={styles.coursename__img} style={{backgroundColor:`${background}`}}>{name.charAt(0)}</div>
    <div className={styles.coursename__details}>
    <h3 className={styles.coursename__name}>{name}</h3>
    <p className={styles.coursename__section}>{section}</p>
    </div>
  </div>;
};

export default CourseName;
