import { motion } from 'framer-motion';
import Image from 'next/image';
import React,{useState} from 'react';
import { useCallback } from 'react';
import styles from "../css/Course/Announce.module.css"
import {useWindowSize} from "../useWindowSizw";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectImageUrl, selectName } from '../features/ClassRoomList';
import { v4 as uuidv4 } from 'uuid';
const Announc = () => {
  const {width, height} = useWindowSize();
  const [open,setOpen]=useState(false)
  const [announce,setAnnounce]=useState("")
  const name=useSelector(selectName)
  const imgUrl=useSelector(selectImageUrl)
  const id=uuidv4();
  const OnClick=useCallback(()=>{
        setOpen(true)
  },[open])
 const OnClick2=useCallback(()=>{
        setOpen(false)
 },[open])
 const textInput=useCallback((event)=>{
    setAnnounce(event.target.value)
 },[announce])
 const todaysDate = new Date();
const times=todaysDate.toLocaleDateString('en-us', {  month: 'short', day: 'numeric' });
 const OnSubmit=useCallback(()=>{
    const data={
      announcement:announce,
      name:name,
      times:times,
      imgUrl:imgUrl,
      id:id
    }
    axios.post("http://localhost:5000/Annoncement",data)
    setAnnounce("")
 },[announce,name,times,imgUrl])

  return <div className={styles.announce} style={{marginLeft:(width<900)?"-5%":"21.8%",
  width:(width<900)?"105%":"76%",display:"flex",
  height:(open?"240px":"72px"),
  flexDirection:"row",alignItems:"center",paddingLeft:"20px"}} >
    {
      open?
      <div>
        {/* <div className={styles.announce__top}> */}
          <input 
           type={"text"} className={styles.announce__input}
           value={announce}
           onChange={textInput}  style={{width:"44rem",}} placeholder="Announce something to your class"/>
        {/* </div> */}
        <div className={styles.announce__middle}>
            <p onClick={OnClick2}  className={styles.announce__middle1}>Cancle</p>
            <div  className={styles.announce__middle2}>
            <p  onClick={OnSubmit}>Post</p>
            </div>
        </div>
      </div>
      :
      <div style={{flexDirection:"row",alignItems:"center",display:"flex"}} onClick={OnClick} >
        <Image
            src={"/../public/avt6.jpg"}
            alt="Google"
            width={40}
            height={40}
            objectFit='cover'
            className='feed__avatar'
            />
            <p className={styles.AnnounceText}>Announce something to your class</p>
      </div>
    }
   
  </div>;
};

export default Announc;
