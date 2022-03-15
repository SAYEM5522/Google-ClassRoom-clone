import React from 'react'
import styles from "../css/ClassWork/ClassWorkHeader.module.css"
import { AiOutlinePlus } from "react-icons/ai";
import HeaderMediumItem from '../HeaderMedium/HeaderMediumItem';
import {BiCalendarAlt} from "react-icons/bi";
import {RiDriveLine, RiFileList2Line} from "react-icons/ri";
import { useCallback } from 'react';
import { useState } from 'react';
const ClassWorkHeader = () => {
  const [popup,setPopup]=useState<boolean>(false);
  const PopUp=useCallback(()=>{
    setPopup(!popup)
},[popup])
  return (
    <div className={styles.ClassWorkHeader}>
      <div className={styles.ClassWorkHeader__Left}>

          <div className={styles.ClassWorkHeader__Left__Icon} onClick={PopUp}>
            <AiOutlinePlus style={{position:"absolute",color:"white",left:"10px"}} size={23}/>
              <p >
                Create
              </p> 
              {
        popup?
        <div className={styles.PopUpView}>
          <div style={{display:"flex",alignItems:"center",flexDirection:"row",marginLeft:"20px",}}>
        <RiFileList2Line size={25} style={{marginRight:"20px"}} />
        <p >Join Class</p>
          </div>
          <div style={{display:"flex",alignItems:"center",flexDirection:"row",marginLeft:"20px"}}>
        <RiFileList2Line style={{marginRight:"20px"}}  size={25} />
        <p >Create Class</p>
          </div>
        </div>
        :null
      }
          </div>
      </div>
      <div className={styles.ClassWorkHeader__Right}>
       <HeaderMediumItem name={"Google Calendar"} Icon={BiCalendarAlt} color="black"/>
      <HeaderMediumItem name={"Class Drive folder"} Icon={RiDriveLine} color="black"/>
     </div>
    </div>
  )
}

export default ClassWorkHeader