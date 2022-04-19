import React from 'react'
import JoinClassHeader from '../JoinClass/JoinClassHeader'
import styles from "../css/Assignments/AssignmentsDetails.module.css"
import styles1 from "../css/JoinClass/JoinClassHeader.module.css"
import { RiFileList2Line } from 'react-icons/ri'
import {HiOutlineMenuAlt2} from "react-icons/hi"
import { useCallback } from 'react'
import { MdClose } from 'react-icons/md'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectUpdateId } from '../features/ClassRoomList'
const AssignmentDetails = ({setModal}) => {
  const [AssignmentName,setAssignmentName]=React.useState("")
  const [AssignmentDescription,setAssignmentDescription]=React.useState("")
  const id=useSelector(selectUpdateId)
  const input1=useCallback((e)=>{
    setAssignmentName(e.target.value)
  },[AssignmentName])
  const input2=useCallback((e)=>{
    setAssignmentDescription(e.target.value)
  },[AssignmentDescription])
  const onClick=useCallback(()=>{
    setModal(false);
  },[])
  const todaysDate = new Date();
  const times=todaysDate.toLocaleDateString('en-us', {  month: 'short', day: 'numeric' });
  const OnSave=useCallback(()=>{
    axios.post(`http://localhost:5000/Assignment`,({
      title:AssignmentName,
      description:AssignmentDescription,
      times:times,
      id:id
    }),
    )
    setAssignmentName("")
    setAssignmentDescription("")
  },[AssignmentName,AssignmentDescription])
  return (
    <div>
      {/* <JoinClassHeader setModal={setModal} name={"Assignment"} button={"Assign"}/> */}
      <div>
      <div className={styles1.classSettingHeader} >
            <div className={styles1.classSettingHeader__left}>
            <MdClose size={24} style={{cursor:"pointer"}} onClick={onClick}/>
            <p   >Assignment</p>
            </div>
            <div className={styles1.classSettingHeader__right}>
             <p style={{cursor:"pointer"}} onClick={OnSave} >Assign</p>
           </div>
          </div>
      </div>
      <div className={styles.Assignment__Details}>
        <div className={styles.Assignment__Details__Left}>
          <div className={styles.Assignment__Details__Left__1}>
          <RiFileList2Line size={25} style={{marginLeft:20,marginTop:-10}}/>
          <input type={"text"} onChange={input1} placeholder={"Title"} className={styles.Assignment__Details__Left1__Input}/>
          </div>
          <div className={styles.Assignment__Details__Left__2}>
            <HiOutlineMenuAlt2 size={25}  />
            <input type={"text"} onChange={input2} placeholder={"Instructions (optional)"} className={styles.Assignment__Details__Left2__Input}/>
         </div>
        </div>
        <div className={styles.Assignment__Details__Right}>
        </div>
      </div>
    </div>
  )
}

export default AssignmentDetails