import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import styles from "../css/Header/Header.module.css"
import { FiMenu } from "react-icons/fi";
import{AiOutlinePlus} from "react-icons/ai";
import {GrApps} from "react-icons/gr";
import { useRouter } from 'next/router';
import SIdeBar from '../SideBar/SideBar';
import PopUpView from './PopUpView';
import styles2 from "../css/Header/PopUpView.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useWindowSize } from '../useWindowSizw'
import { motion } from 'framer-motion'
 import CreateClass from '../CreateClass/CreateClass'
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
  const {width, height} = useWindowSize();
  const [open,setOpen]=useState<boolean>(false);
  const [popup,setPopup]=useState<boolean>(false);
  const [join,setJoin]=useState<boolean>(false);
  const [modal,setModal]=useState<boolean>(false);
  const [create,setCreate]=useState<boolean>(false);
  const [Createopen,setCreateOpen]=useState<boolean>(false);
  
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
  const Createclass=useCallback(()=>{
    setCreate(true)
    setCreateOpen(true)
  },[Createopen,create])
  
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
        <p onClick={Createclass}>Create Class</p>
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
      <motion.div initial={{scale:0.8,opacity:1}} animate={{scale:1,opacity:1}} transition={{type:"tween",duration:0.3}}>
      <Box  style={{width:width,height:height,backgroundColor:"#fff",borderWidth:"0px"}}>
      </Box>
      </motion.div>
    </Modal>
       </div>
      :null
    }
    </div>
    <div style={{position:"absolute",left:"50%",top:"50%"}}>
      {
        create?<CreateClass CreateOpen={Createopen} setCreateOpen={setCreateOpen} />:null
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
