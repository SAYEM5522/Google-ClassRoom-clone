import React, { useCallback } from 'react'
import styles from "../../css/Course/ClassSettings/ClassSettingHeader.module.css"
import {MdClose} from "react-icons/md"
import { motion } from 'framer-motion'
const ClassSettingHeader = ({setOpen}) => {
  const onClick=useCallback(()=>{
    setOpen(false);
  },[setOpen])
  return (
          <motion.div className={styles.classSettingHeader} initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}}>
            <div className={styles.classSettingHeader__left}>
            <MdClose size={24} onClick={onClick}/>
            <p >Class settings</p>
            </div>
            <div className={styles.classSettingHeader__right}>
             <p>Save</p>
           </div>
          </motion.div>

  )
}

export default ClassSettingHeader