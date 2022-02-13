import React from 'react'
import styles from "../../css/Course/ClassSettings/ClassSettings.module.css"
import ClassSettingEdit from './ClassSettingEdit'
import ClassSettingHeader from './ClassSettingHeader'
import { motion } from "framer-motion"
const ClassSettings = () => {
  return (
           <motion.div >
          <ClassSettingHeader/>
          <ClassSettingEdit/>
          </motion.div>
  )
}

export default ClassSettings