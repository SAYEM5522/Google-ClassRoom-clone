import React from 'react'
import styles from "../css/ClassWork/ClassWorkHeader.module.css"
import { AiOutlinePlus } from "react-icons/ai";
import HeaderMediumItem from '../HeaderMedium/HeaderMediumItem';
import {BiCalendarAlt} from "react-icons/bi";
import {RiDriveLine, RiFileList2Line} from "react-icons/ri";
import { useCallback } from 'react';
import { useState } from 'react';
import Assignments from '../Assignments/Assignments';
const ClassWorkHeader = () => {
  const [popup,setPopup]=useState<boolean>(false);
  const [assignmentOpen,setAssignmentOpen]=useState<boolean>(false);
  const [modal,setModal]=useState<boolean>(false);

  const PopUp=useCallback(()=>{
    setPopup(!popup)
},[popup])
const OpenAssignment=useCallback(()=>{
  setAssignmentOpen(!assignmentOpen)
  setModal(true)
},[assignmentOpen,modal])
  return (
    <div className={styles.ClassWorkHeader}>
      {
        assignmentOpen?
        <div style={{position:"absolute",left:"0px",right:"0px"}}>
        <Assignments modal={modal} setModal={setModal} />
         </div>
        :null
      }
      <div className={styles.ClassWorkHeader__Left}>

          <div className={styles.ClassWorkHeader__Left__Icon} onClick={PopUp}>
            <AiOutlinePlus style={{position:"absolute",color:"white",left:"10px"}} size={23}/>
              <p >
                Create
              </p> 

              {
        popup?
        <div className={styles.PopUpView}>
          <div style={{display:"flex",alignItems:"center",flexDirection:"row",marginLeft:"20px",}} onClick={OpenAssignment}>
        <RiFileList2Line size={25} style={{marginRight:"20px"}} />
        <p >Assignment</p>
          </div>
          <div style={{display:"flex",alignItems:"center",flexDirection:"row",marginLeft:"20px"}}>
        <RiFileList2Line style={{marginRight:"20px"}}  size={25} />
        <p >Quiz assignment</p>
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