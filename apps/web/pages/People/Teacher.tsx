import Image from 'next/image';
import React from 'react';
import { CgMail } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import styles from "../css/People/Teacher.module.css";
import { selectImageUrl } from '../features/ClassRoomList';
const Teacher = () => {
  const img=useSelector(selectImageUrl)

  return <div className={styles.teacher}>
    <h1>Teachers</h1>
    <div className={styles.teacher__line}/>
    <div className={styles.teacher__bottom}>
      <Image
      // src={"/../public/avt4.jpg"}
      src={img}
      alt="Google"
      width={32}
      height={32}
      objectFit='cover'
      className='teacher__avatar'
      />
      <CgMail size={26} className={styles.teacher__icon} />
      
    </div>
  </div>;
};

export default Teacher;
