import React, { useCallback } from 'react'
import {MdClose} from "react-icons/md"
import { motion } from 'framer-motion'
import styles from "../css/JoinClass/JoinClassHeader.module.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCreateSubject, selectUpdateId } from '../features/ClassRoomList'
const JoinClassHeader = ({setModal,name,button,ClassName,Subject,Section,Room}:any) => {
  const id=useSelector(selectUpdateId)
  const onClick=useCallback(()=>{
    setModal(false);
  },[])
  const OnSave=useCallback(()=>{
    if(button==="Save"){
      axios.post(`http://localhost:5000/UpdateClass?id=${id}`,({
        ClassName,
        Section,
        Subject,
        Room
      }),
      {headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      }}
      )
    }
  },[ClassName,Section,Subject,Room])
  return (
          <div className={styles.classSettingHeader} >
            <div className={styles.classSettingHeader__left}>
            <MdClose size={24} style={{cursor:"pointer"}} onClick={onClick}/>
            <p   >{name}</p>
            </div>
            <div className={styles.classSettingHeader__right}>
             <p style={{cursor:"pointer"}} onClick={OnSave}>{button}</p>
           </div>
          </div>

  )
}

export default JoinClassHeader