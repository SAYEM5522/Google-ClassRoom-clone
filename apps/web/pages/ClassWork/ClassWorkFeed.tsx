import React from 'react'
import {RiFileList2Line} from "react-icons/ri";
import {BiDotsVerticalRounded} from "react-icons/bi";
import styles from "../css/ClassWork/ClassWorkFeed.module.css"
const ClassWorkFeed = () => {
  return (
    <div className={styles.ClassWorkFeed}>

      <div className={styles.ClassWorkFeed__Left}>
        <div className={styles.ClassWorkFeed__Left__Icon}>
        <RiFileList2Line size={25} />
        </div>
       <p>
          Assignment1
       </p>
      </div>
      <div className={styles.ClassWorkFeed__Right}>
      <p>
        Due Tomorrow
      </p>
        <BiDotsVerticalRounded size={23} color="#5f6368"/>
     </div>
    </div> 
  )
}

export default ClassWorkFeed