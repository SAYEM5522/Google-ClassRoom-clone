import React, { useCallback } from 'react';
import styles from "../css/Course/ClassDetails.module.css"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import ClassDetailBottom from './ClassDetailBottom';
import { animate, motion } from 'framer-motion';
const ClassDetails = () => {
  const [openBottom, setOpenBottom] = React.useState(false);
  const onClick=useCallback(()=>{
            setOpenBottom(!openBottom)
            console.log(openBottom)
            
  },[openBottom])
  const variants = {
    open: { height: "340px",borderLeftBottomRadius:"0px",borderRightBottomRadius:"0px"},
    closed: { height:"240px" },
  }
  const variant2 = {
    open2: { borderLeftBottomRadius:"0px",borderRightBottomRadius:"0px"},
    closed2: { borderLeftBottomRadius:"10px",borderRightBottomRadius:"10px" },
  }
  return <motion.div className={styles.classdetails}  animate={openBottom ? "open" : "closed"}  variants={variants}>
        <motion.div className={styles.classdetails__name} animate={{borderBottomLeftRadius:openBottom?"0px":"10px",borderBottomRightRadius:openBottom?"0px":"10px"}}  >
          <div className={styles.classdetails__info}>
          <h1>CSE311.8 Spring 2022</h1>
          <h4>8</h4>
          </div>
        <AiOutlineInfoCircle color='#fff' size={24} className={styles.classdetails__icon} onClick={onClick} />
        <div className={styles.classdetails__bottom}>
        {
          openBottom?<ClassDetailBottom/>:null
         }
        </div> 
        </motion.div>
       
            </motion.div>;

};

export default ClassDetails;
