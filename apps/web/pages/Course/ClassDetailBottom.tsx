import { motion } from 'framer-motion'
import React from 'react'
import styles from "../css/Course/ClassDetailBottom.module.css"
import {useWindowSize} from "../useWindowSizw";

const ClassDetailBottom = () => {
  const {width, height} = useWindowSize();

  return (
    <motion.div className={styles.classDetailBottom}>
        <h1>hello</h1>
    </motion.div>
  )
}

export default ClassDetailBottom