import { motion } from 'framer-motion'
import React from 'react'
import styles from "../css/Course/ClassDetailBottom.module.css"
import {useWindowSize} from "../useWindowSizw";
import { useSelector } from 'react-redux';
import { selectCreateSubject,selectCreateRoom,selectCreateSection } from '../features/ClassRoomList';
const ClassDetailBottom = () => {
  const {width, height} = useWindowSize();
  const subject=useSelector(selectCreateSubject);
  const room=useSelector(selectCreateRoom);
  const section=useSelector(selectCreateSection);
  return (
    <div className={styles.classDetailBottom} style={{top:(width<630)?"180px":null}}>
        <p className={styles.classDetailBottom__Text} >
          {subject}
        </p>
        <p className={styles.classDetailBottom__Text} >
          {room
          }
        </p>
        <p className={styles.classDetailBottom__Text} >
          {section}
        </p>
    </div>
  )
}

export default ClassDetailBottom