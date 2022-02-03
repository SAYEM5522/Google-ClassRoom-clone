import Image from 'next/image';
import React from 'react';
import { BiDotsVerticalRounded, BiFolder } from 'react-icons/bi';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import styles from "../css/CourseList/Course.module.css";
const Course = () => {
  return <div className={styles.course}>
        <div className={styles.course__details}>
         <div className={styles.course__image}>
           <Image
           src={"/../public/Honors.jpg"}
           height={100}
           width={300}
           objectFit="cover"
           className='course__image__background'
           objectPosition={'center'}
           
           />
           <div className={styles.course__image__details}>
           <h3 className={styles.course__image__name}>CSE 299 Spring 22</h3>
           <BiDotsVerticalRounded className={styles.course__image__icon} size={24}/>
          
           </div>
       
           <div className={styles.course__avatar}>
             <div className={styles.course__profile}>
           <Image 
                  src="/../public/avator.jpg"
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
