import React from 'react'
import {RiFileList2Line} from "react-icons/ri";
import {BiDotsVerticalRounded} from "react-icons/bi";
import styles from "../css/ClassWork/ClassWorkFeed.module.css"
import { useState } from 'react';
import { useCallback } from 'react';
import {motion} from 'framer-motion';
interface ClassWorkFeedProps {
  item: {
    title: string;
    description: string;
    times: string;
  }
}
const ClassWorkFeed = ({item}:ClassWorkFeedProps) => {
  
  const [open,setOpen]=useState(false)
  const OpenClass=useCallback(()=>{
    setOpen(!open)
  },[open])
  const variants = {
    open: { height: "250px",},
    closed: { height:"62px" },
  }
  return (
    <motion.div className={styles.ClassWorkFeed} animate={open? "open":"closed"} 
    variants={variants}
    transition={{type:'tween',duration:0.25}}
     onClick={OpenClass}
     
     >

      <div className={styles.ClassWorkFeed__Left} style={{
        position:open?"absolute":"relative",
        top:open?"10px":"0px",
      }}>
        <div className={styles.ClassWorkFeed__Left__Icon}>
        <RiFileList2Line size={25} />
        </div>
       <p>
         {item.title}
       </p>
      </div>
      <div className={styles.ClassWorkFeed__Right}
      style={{
        position:open?"absolute":"relative",
        top:open?"5px":"0px",
        right:open?"10px":"0px",
      }}
      >
      <p>
        posted {item.times}
      </p>
        <BiDotsVerticalRounded size={23} color="#5f6368"/>
     </div>
     {
        open?
        <div className={styles.ClassWorkFeed__Bottom}>
        <p>
          {item.description}
        </p>
        </div>:null
     }
    </motion.div> 
  )
}

export default ClassWorkFeed