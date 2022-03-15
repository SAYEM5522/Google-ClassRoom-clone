import React from 'react'
import styles from "../css/ClassWork/ClassWorkHeader.module.css"
import { AiOutlinePlus } from "react-icons/ai";
import HeaderMediumItem from '../HeaderMedium/HeaderMediumItem';
import {BiCalendarAlt} from "react-icons/bi";
import {RiDriveLine} from "react-icons/ri";
const ClassWorkHeader = () => {
  return (
    <div className={styles.ClassWorkHeader}>
      <div className={styles.ClassWorkHeader__Left}>
          <div className={styles.ClassWorkHeader__Left__Icon}>
            <AiOutlinePlus style={{position:"absolute",color:"white",left:"10px"}} size={23}/>
              <p >
                Create
              </p> 
          </div>
      </div>
      <div className={styles.ClassWorkHeader__Right}>
       <HeaderMediumItem name={"Google Calendar"} Icon={BiCalendarAlt} color="black"/>
      <HeaderMediumItem name={"Class Drive folder"} Icon={RiDriveLine} color="black"/>
     </div>
    </div>
  )
}

export default ClassWorkHeader