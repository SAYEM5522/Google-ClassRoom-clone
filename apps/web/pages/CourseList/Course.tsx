import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { BiDotsVerticalRounded, BiFolder } from 'react-icons/bi';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styles from "../css/CourseList/Course.module.css";
import { setClassRoomList } from '../features/ClassRoomList';
interface CourseProps {
  course: {
    id: number;
    Subject: string;
    faculty: string;
    image?: string;
    Section: string;
    avatar: string;
    Room: string;

  }
}
const Course = ({course}:CourseProps) => {
  const dispatch=useDispatch();
  // useEffect(()=>{
  //   dispatch(setClassRoomList({
  //     Subject:course.Subject,
  //     Section:course.Section,
  //     Room:course.Room
  //   }))
  // },[])
  const router=useRouter()
  const onClick:React.MouseEventHandler<HTMLDivElement>=()=>{
    dispatch(setClassRoomList({
      Subject:course.Subject,
      Section:course.Section,
      Room:course.Room
    }))
    router.push("/Course/Class")
  }
  return <div className={styles.course}>
        <div className={styles.course__details}>
         <div className={styles.course__image} >
           <div onClick={onClick}>
           <Image
           src={"/../public/Honors.jpg"}
           height={100}
           width={300}
           objectFit="cover"
           className='course__image__background'
           objectPosition={'center'}
           
           />
           <div className={styles.course__image__details}>
           <h3 className={styles.course__image__name}>{course.Subject} <span className={styles.course__image__section__no}>{course.Section}</span></h3>
           <BiDotsVerticalRounded className={styles.course__image__icon} size={24}/>
           </div>
           </div>
           <p className={styles.course__image__faculty}>{course.faculty} </p>
       
           <div className={styles.course__avatar}>
             <div className={styles.course__profile}>
           {/* <Image 
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
      `}</style> */}
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
