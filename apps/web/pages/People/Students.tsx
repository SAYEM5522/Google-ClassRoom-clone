import Image from 'next/image';
import React from 'react';
import styles from "../css/People/Students.module.css";
import { CgMail } from 'react-icons/cg';

const Students = () => {
  return <div className={styles.students}>
        <div className={styles.students__details}>
          <Image 
          src={"/../public/avt3.jpg"}
          alt="Google"
          width={32}
          height={32}
          objectFit='cover'
          className='students__avatar'
          />
          <p className={styles.students__name}>Semonti Barua 2012758042</p>
          <CgMail size={26}/>
        
        </div>
  </div>;
};

export default Students;
