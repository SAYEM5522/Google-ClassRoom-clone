import React, { useCallback } from 'react'
import {MdClose} from "react-icons/md"
import { motion } from 'framer-motion'
import styles from "../css/JoinClass/JoinClassHeader.module.css"
const JoinClassHeader = ({setModal}) => {
  const onClick=useCallback(()=>{
    setModal(false);
  },[])
  return (
          <div className={styles.classSettingHeader} >
            <div className={styles.classSettingHeader__left}>
            <MdClose size={24} style={{cursor:"pointer"}} onClick={onClick}/>
            <p >Join Class</p>
            </div>
            <div className={styles.classSettingHeader__right}>
             <p>Join</p>
           </div>
          </div>

  )
}

export default JoinClassHeader