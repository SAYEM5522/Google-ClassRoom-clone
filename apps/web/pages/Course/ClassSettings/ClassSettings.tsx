import React from 'react'
import styles1 from "../../css/Course/ClassSettings/ClassSettings.module.css"
import styles from "../../css/Course/ClassSettings/ClassSettingEdit.module.css"

import ClassSettingEdit from './ClassSettingEdit'
import { motion } from "framer-motion"
import JoinClassHeader from '../../JoinClass/JoinClassHeader'
import { useCallback } from 'react'
const ClassSettings = ({setOpen}) => {
  const [ClassName, setClassName] = React.useState("");
  const [Section, setSection] = React.useState("");
  const [Subject, setSubject] = React.useState("");
  const [Room, setRoom] = React.useState("");
  const ProvideClassName=useCallback((e)=>{
    setClassName(e.target.value)
  },[ClassName])
  const ProvideSection=useCallback((e)=>{
    setSection(e.target.value)
  },[Section])
  const ProvideSubject=useCallback((e)=>{
    setSubject(e.target.value)
  },[Subject])
  const ProvideRoom=useCallback((e)=>{
    setRoom(e.target.value)
  },[Room])
  return (
           <motion.div className={styles1.classsetting} initial={{scaleY:0.8,scaleX:0.9,opacity:0}} animate={{scaleY:1,scaleX:1,opacity:1}}>
          <JoinClassHeader setModal={setOpen}  name={"Class Setting"} button={"Save"}/>
          <div className={styles.classSettingEdit}>
      <div>
      <p className={styles.ClassHeader}>Class Details</p>
    <form style={{display:"flex",flexDirection:"column"}} >
    <input className={styles.InputField} id="name" type="text" autoComplete="name" required placeholder='Class name (required)' onChange={ProvideClassName} />
    <input className={styles.InputField} id="Section" type="text"  placeholder='Section' onChange={ProvideSection} />
    <input className={styles.InputField} id="Subject" type="text"  placeholder='Subject' onChange={ProvideSubject} />
    <input className={styles.InputField} id="Room" type="text"   placeholder='Room' onChange={ProvideRoom} />
    </form>

    </div>
    </div>
          </motion.div>
  )
}

export default ClassSettings