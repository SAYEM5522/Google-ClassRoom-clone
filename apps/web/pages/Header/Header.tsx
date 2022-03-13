import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import styles from "../css/Header/Header.module.css"
import { FiMenu } from "react-icons/fi";
import{AiOutlinePlus} from "react-icons/ai";
import {GrApps} from "react-icons/gr";
import { useRouter } from 'next/router';
import SIdeBar from '../SideBar/SideBar';
import PopUpView from './PopUpView';
const imageWidth:number=70
const imageHight:number=70

const Header = () => {
  const [open,setOpen]=useState<boolean>(false);
  const [popup,setPopup]=useState<boolean>(false);
  const router=useRouter()
  const onClick=useCallback(()=>{
    setOpen(true)
  },[open])
  const PopUp=useCallback(()=>{
      setPopup(!popup)
  },[popup])
  
  return (
  <div className={styles.header}>
    <div className={styles.header__left} >
    {
      open?<SIdeBar setOpen={setOpen}/>:null
    }
      <FiMenu size={22} className={styles.header__Icon} onClick={onClick}/>
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
      <AiOutlinePlus size={21} style={{ marginRight:"1.9rem",position:'relative'}} onClick={PopUp} />
      {
        popup?<PopUpView />:null
      }
      <GrApps size={21} style={{ marginRight:"1.6rem"}} />       
      <Image 
       src="/../public/avator.jpg"
       alt="Google"
       width={35}
       height={35}
       objectFit='cover'
       className='avatar'
      />
          <style jsx global>{`
        .avatar {
          border-radius: 50% !important;
          margin-right:7px;
        }
      `}</style>

    </div>

  </div>
  );
};

export default Header;
