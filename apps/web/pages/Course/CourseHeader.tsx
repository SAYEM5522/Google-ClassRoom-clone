import React, { useCallback } from 'react';
import styles from "../css/Course/CourseHeader.module.css";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';
import { GrApps } from 'react-icons/gr';
import ClassMiddle from './ClassMiddle';
import { IoSettingsOutline } from "react-icons/io5"
import { useRouter } from 'next/router';
import ClassSettings from './ClassSettings/ClassSettings';
const list=[
  {
  id:1,
  name:"Stream"
},
{
  id:2,
  name:"ClassWork"
},
{
  id:3,
  name:"People"
},
{
  id:4,
  name:"Grades"
}
]

const CourseHeader = () => {
  const router=useRouter();
  const onClick=useCallback(()=>{
    console.log("clicked")
       return(
         <div className={styles.courseheader__model}>
         <ClassSettings/>
         </div>
       )
  },[])
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
    {
      list.map((list,index)=>(
        <ClassMiddle list={list} key={list.id}/>
      )
        
      )
    }
    </div>
    <div className={styles.courseheader__right}>
    <IoSettingsOutline size={21} className={styles.courseheader__icon} onClick={onClick}/>
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
