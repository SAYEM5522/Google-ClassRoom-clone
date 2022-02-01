import Image from 'next/image';
import React from 'react';
import styles from "../css/Header/Header.module.css"
import { FiMenu } from "react-icons/fi";
const Header = () => {
  
  return (
  <div className={styles.header}>
    <div className={styles.header__left} >
      <FiMenu size={22} className={styles.header__Icon}/>
      <Image
            src="/../public/logo.jpg"
            alt="Google"
            width={75}
            height={35}
            priority={true}
            objectFit="contain"
            objectPosition="center"
            

    />
    <p>Classroom</p>
    </div>
    <div className={styles.header__right}>
      <h1>hello</h1>
    </div>

  </div>
  );
};

export default Header;
