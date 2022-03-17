import React from 'react'
import JoinClassHeader from '../JoinClass/JoinClassHeader'
import styles from "../css/Assignments/AssignmentsDetails.module.css"
import { RiFileList2Line } from 'react-icons/ri'
const AssignmentDetails = ({setModal}) => {
  return (
    <div>
      <JoinClassHeader setModal={setModal} name={"Assignment"} button={"Assign"}/>
      <div className={styles.Assignment__Details}>
        <div className={styles.Assignment__Details__Left}>
          <div className={styles.Assignment__Details__Left__1}>
          <RiFileList2Line size={25} style={{marginLeft:20,marginTop:-10}}/>
          <input type={"text"} placeholder={"Title"} className={styles.Assignment__Details__Left1__Input}/>
          </div>
          <div className={styles.Assignment__Details__Left__2}>
          <input type={"text"} placeholder={"Instructions (optional)"} className={styles.Assignment__Details__Left2__Input}/>

         </div>
        </div>
        <div className={styles.Assignment__Details__Right}>
        <p>world</p>
        </div>
      </div>
    </div>
  )
}

export default AssignmentDetails