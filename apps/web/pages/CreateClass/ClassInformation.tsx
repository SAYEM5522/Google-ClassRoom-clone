import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import styles from "../css/CreateClass/ClassInformation.module.css"
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
const ClassInformation = () => {
  const router=useRouter();
  const [ClassName, setClassName] = React.useState("");
  const [Section, setSection] = React.useState("");
  const [Subject, setSubject] = React.useState("");
  const [Room, setRoom] = React.useState("");
  const [classCode,setClassCode]=useState("")
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
 const id=uuidv4();
 
  const ClassCode = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 7; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  const Submit=useCallback((e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/CreateClass',{
          ClassName,
          Section,
          Subject,
          Room,
          id,
      })
    //  setClassCode(ClassCode())
     const code={
         classCode:ClassCode()
     }
     axios.post('http://localhost:5000/CreateClassCode',code)
     
      router.push("/Course/Class")
  },[ClassName,Section,Subject,Room])
  
  return (
    <div>
      <p className={styles.ClassHeader}>Create class</p>
    <form style={{display:"flex",flexDirection:"column"}} >
    <input className={styles.InputField} id="name" type="text" autoComplete="name" required placeholder='Class name (required)' onChange={ProvideClassName} />
    <input className={styles.InputField} id="Section" type="text"  placeholder='Section' onChange={ProvideSection} />
    <input className={styles.InputField} id="Subject" type="text"  placeholder='Subject' onChange={ProvideSubject} />
    <input className={styles.InputField} id="Room" type="text"   placeholder='Room' onChange={ProvideRoom} />
    <div className={styles.ButtonList} >
      <p className={styles.button1}>Cancle</p>
      <p className={styles.button2} onClick={Submit}>Create</p>
    </div>
    </form>

    </div>
  
  )
}

export default ClassInformation