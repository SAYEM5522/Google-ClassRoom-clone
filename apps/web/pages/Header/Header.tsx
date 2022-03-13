import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import styles from "../css/Header/Header.module.css"
import { FiMenu } from "react-icons/fi";
import{AiOutlinePlus} from "react-icons/ai";
import {GrApps} from "react-icons/gr";
import { useRouter } from 'next/router';
import SIdeBar from '../SideBar/SideBar';
import PopUpView from './PopUpView';
import JoinClass from '../JoinClass/JoinClass';
import styles2 from "../css/Header/PopUpView.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { width } from '@mui/system';
const imageWidth:number=70
const imageHight:number=70
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"1000px",
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

const Header = () => {
  const [open,setOpen]=useState<boolean>(false);
  const [popup,setPopup]=useState<boolean>(false);
  const [join,setJoin]=useState<boolean>(false);
  const [modal,setModal]=useState<boolean>(false);
  
  const router=useRouter()
  const onClick=useCallback(()=>{
    setOpen(true)
  },[open])
  const PopUp=useCallback(()=>{
      setPopup(!popup)
  },[popup])
  const JoinClass=useCallback(()=>{
    setJoin(true)
    setModal(true)
  },[join,modal])
  const CreateClass=useCallback(()=>{
   
  },[])
  
  return (
  <div className={styles.header}>
   
    <div className={styles.header__left} >
    {
      open?<SIdeBar setOpen={setOpen} />:null
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
        popup?
        <div className={styles2.PopUpView}>
        <p onClick={JoinClass}>Join Class</p>
        <p onClick={CreateClass}>Create Class</p>
        </div>
        :null
      }
       <div>
    {
      join?
     <div>
           <Modal
      open={modal}
      onClose={()=>setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  style={{width:"1000px",height:"1000px",backgroundColor:"#fff"}}>
      
      </Box>
    </Modal>
       </div>
      :null
    }
    </div>
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
