import React, { useCallback } from 'react'
import {MdClose} from "react-icons/md"
import { motion } from 'framer-motion'
import styles from "../css/JoinClass/JoinClassHeader.module.css"
const JoinClassHeader = ({setModal,name,button}) => {
  const onClick=useCallback(()=>{
    setModal(false);
  },[])
  return (
          <div className={styles.classSettingHeader} >
            <div className={styles.classSettingHeader__left}>
            <MdClose size={24} style={{cursor:"pointer"}} onClick={onClick}/>
            <p >{name}</p>
            </div>
            <div className={styles.classSettingHeader__right}>
             <p>{button}</p>
           </div>
          </div>

  )
}

export default JoinClassHeader