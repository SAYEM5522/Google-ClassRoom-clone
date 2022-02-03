import Image from 'next/image';
import React from 'react';
import styles from "../css/Header/Header.module.css"
import { FiMenu } from "react-icons/fi";
import{AiOutlinePlus} from "react-icons/ai";
import {GrApps} from "react-icons/gr";

const imageWidth:number=70
const imageHight:number=70

const Header = () => {
  
  return (
  <div className={styles.header}>
    <div className={styles.header__left} >
      <FiMenu size={22} className={styles.header__Icon}/>
      <Image
            src="/../public/logo.jpg"
            alt="Google"
            width={imageWidth}
            height={imageHight}
  
            objectFit="contain"
            objectPosition="center"
            

    />
    <p >Classroom</p>
    </div>
    <div className={styles.header__right}>
      <AiOutlinePlus size={21} style={{ marginRight:"1.9rem"}} />
      <GrApps size={21} style={{ marginRight:"1.6rem"}} />
       
      {/* <div className={styles.Avator} > */}
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
          margin-right:7px;
        }
      `}</style>
      {/* </div> */}

    </div>

  </div>
  );
};

export default Header;
