import React, { useCallback } from 'react';
import styles from "../css/Course/ClassDetails.module.css"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import ClassDetailBottom from './ClassDetailBottom';
import { animate, motion } from 'framer-motion';
import {useWindowSize} from "../useWindowSizw";

const ClassDetails = () => {
  const {width, height} = useWindowSize();
  const [openBottom, setOpenBottom] = React.useState(false);
  const onClick=useCallback(()=>{
            setOpenBottom(!openBottom)
            console.log(openBottom)
            
  },[openBottom])
  const variants = {
    open: { height: "340px",},
    closed: { height:"240px" },
  }

  return <motion.div className={styles.classdetails}  animate={openBottom ? "open" : "closed"}  variants={variants}>
        <motion.div className={styles.classdetails__name} animate={{borderBottomLeftRadius:openBottom?"0px":"10px",borderBottomRightRadius:openBottom?"0px":"10px",height:(width<630)?"180px":"240px"}}  >
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
