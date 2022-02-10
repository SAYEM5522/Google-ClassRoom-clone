import React from 'react'
import styles from "../css/ClassSettings/ClassSettingHeader.module.css"
import {MdClose} from "react-icons/md"
const ClassSettingHeader = () => {
  return (
          <div className={styles.classSettingHeader}>
            <div className={styles.classSettingHeader__left}>
            <MdClose size={24}/>
            <p >Class settings</p>
            </div>
            <div className={styles.classSettingHeader__right}>
             <p>Save</p>
           </div>
          </div>

  )
}

export default ClassSettingHeader