import React from 'react'
import styles from "../css/CreateClass/ClassInformation.module.css"
const ClassInformation = () => {
  return (
    <div>
      <p className={styles.ClassHeader}>Create class</p>
    <form style={{display:"flex",flexDirection:"column"}} >
    <input className={styles.InputField} id="name" type="text" autoComplete="name" required placeholder='Class name (required)' />
    <input className={styles.InputField} id="Section" type="text"  placeholder='Section' />
    <input className={styles.InputField} id="Subject" type="text"  placeholder='Subject' />
    <input className={styles.InputField} id="Room" type="text"   placeholder='Room' />
    <div className={styles.ButtonList} >
      <p className={styles.button1}>Cancle</p>
      <p className={styles.button2}>Create</p>
    </div>
    </form>

    </div>
  
  )
}

export default ClassInformation