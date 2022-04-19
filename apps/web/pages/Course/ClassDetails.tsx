import React, { useCallback } from 'react';
import styles from "../css/Course/ClassDetails.module.css"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import ClassDetailBottom from './ClassDetailBottom';
import { animate, motion } from 'framer-motion';
import {useWindowSize} from "../useWindowSizw";
import { useSelector } from 'react-redux';
import ClassRoomList, { selectCreateRoom,selectCreateSubject,selectCreateSection} from '../features/ClassRoomList';
import { useRouter } from 'next/router';

const ClassDetails = () => {
  const router = useRouter()
  console.log("router name :",router.query.keyword);
  // const classRoomListSubject=useSelector(selectCreateSubject)
  // const classRoomListSection=useSelector(selectCreateSection)
  // const classRoomListRoom=useSelector(selectCreateRoom)
  
  const {width, height} = useWindowSize();
  const [openBottom, setOpenBottom] = React.useState(false);
  const onClick=useCallback(()=>{
            setOpenBottom(!openBottom)
            
  },[openBottom])
  const variants = {
    open: { height: "340px",},
    closed: { height:"240px" },
  }

  return <div className={styles.classdetails}  style={{height:openBottom?"340px":"240px"}}  >
        <div className={styles.classdetails__name} style={{borderBottomLeftRadius:openBottom?"0px":"10px",borderBottomRightRadius:openBottom?"0px":"10px",height:(width<630)?"180px":"240px"}}  >
          <div className={styles.classdetails__info}>
          <h1>{router.query.keyword}</h1>
          <h4>{router.query.Section}</h4>
          </div>
        <AiOutlineInfoCircle color='#fff' size={24} className={styles.classdetails__icon} onClick={onClick} />
        <div className={styles.classdetails__bottom} >
        {
          openBottom?<ClassDetailBottom/>:null
         }
        </div> 
        </div>
       
            </div>;

};

export default ClassDetails;
