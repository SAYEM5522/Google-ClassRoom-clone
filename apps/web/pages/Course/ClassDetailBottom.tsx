import { motion } from 'framer-motion'
import React from 'react'
import styles from "../css/Course/ClassDetailBottom.module.css"
import {useWindowSize} from "../useWindowSizw";

const ClassDetailBottom = () => {
  const {width, height} = useWindowSize();

  return (
    <div className={styles.classDetailBottom} style={{top:(width<630)?"180px":null}}>
        <h1>hello</h1>
    </div>
  )
}

export default ClassDetailBottom