import Image from 'next/image';
import React from 'react';
import { BiDotsVerticalRounded, BiFolder } from 'react-icons/bi';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import styles from "../css/CourseList/Course.module.css";
interface CourseProps {
  course: {
    id: number;
    name: string;
    faculty: string;
    image: string;
    section: string;
    avatar: string;

  }
}
const Course = ({course}:CourseProps) => {
  return <div className={styles.course}>
        <div className={styles.course__details}>
         <div className={styles.course__image}>
           <Image
           src={course.image}
           height={100}
           width={300}
           objectFit="cover"
           className='course__image__background'
           objectPosition={'center'}
           
           />
           <div className={styles.course__image__details}>
           <h3 className={styles.course__image__name}>{course.name} <span className={styles.course__image__section__no}>{course.section}</span></h3>
           <BiDotsVerticalRounded className={styles.course__image__icon} size={24}/>
           </div>
           <p className={styles.course__image__faculty}>{course.faculty} </p>
       
           <div className={styles.course__avatar}>
             <div className={styles.course__profile}>
           <Image 
                  src={course.avatar}
                  alt="Google"
                  width={75}
                  height={75}
                  objectFit='cover'
                  className='avatar'
      />
          <style jsx global>{`
        .avatar {
          border-radius: 50% !important;
        }
      `}</style>
      </div>
           </div>
           <div className={styles.course__bottom}>
            <BsFillPersonBadgeFill size={21} className={styles.course__icon}/>
            <BiFolder size={21}/>
           </div>
         </div>
        </div>
  </div>;
};

export default Course;
