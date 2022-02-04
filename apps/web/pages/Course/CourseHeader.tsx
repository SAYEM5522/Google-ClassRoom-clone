import React from 'react';
import styles from "../css/Course/CourseHeader.module.css";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';
import { GrApps } from 'react-icons/gr';

const CourseHeader = () => {
  return (
<div className={styles.courseheader}>
    <div className={styles.courseheader__left}>
      <FiMenu size={22}/>
      <div className={styles.courseheader__left__name}>
        <p className={styles.courseheader__left__coursename}>CSE311.8 Spring 2022</p>
        <p className={styles.courseheader__left__section}>8</p>
      </div>
    </div>
    <div className={styles.courseheader__middle}>
      <p>Stream</p>
      <p>ClassWork </p>
      <p>People</p>
    </div>
    <div className={styles.courseheader__right}>
    <GrApps size={18} style={{ marginRight:"1.5rem"}} />
       
       <Image 
        src="/../public/avator.jpg"
        alt="Google"
        width={30}
        height={30}
        objectFit='cover'
        className='avatar'
       />
           <style jsx global>{`
         .avatar {
           border-radius: 50% !important;
           margin-right:7px
           
         }
       `}</style>
    </div>
  </div>
  )

   
  
};

export default CourseHeader;
