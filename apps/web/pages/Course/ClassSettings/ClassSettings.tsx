import React from 'react'
import styles from "../../css/Course/ClassSettings/ClassSettings.module.css"
import ClassSettingEdit from './ClassSettingEdit'
import ClassSettingHeader from './ClassSettingHeader'
import { motion } from "framer-motion"
const ClassSettings = ({setOpen}) => {
  return (
           <motion.div className={styles.classsetting} initial={{scaleY:0.8,scaleX:0.9,opacity:0}} animate={{scaleY:1,scaleX:1,opacity:1}}>
          <ClassSettingHeader setOpen={setOpen}/>
          <ClassSettingEdit/>
          </motion.div>
  )
}

export default ClassSettings