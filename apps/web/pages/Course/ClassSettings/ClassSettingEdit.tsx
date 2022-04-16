import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import styles from "../../css/Course/ClassSettings/ClassSettingEdit.module.css"
// import styles from "../../css/CreateClass/ClassInformation.module.css"

const ClassSettingEdit = () => {
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
  )
}

export default ClassSettingEdit