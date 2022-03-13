import React, { useEffect, useState } from 'react';
import styles from "../css/Course/ClassFeed.module.css"
import Announc from './Announc';
import ClassDetails from './ClassDetails';
import Feed from './Feed';
import Upcaming from './Upcaming';
import {useWindowSize} from "../useWindowSizw";
import { motion } from 'framer-motion';

const ClassFeed = () => {
  const {width, height} = useWindowSize();
  const [show,setShow]=useState(true);
  useEffect(()=>{
    (width<900)?setShow(false):setShow(true);
  },[width])

  
  return <div className={styles.classfeed} style={{ 
    marginLeft:(width<1045)?"2rem":"auto", 
    marginRight:(width<1045)?"2rem":"auto",
    width:(width<1045)?"calc(100% - 3.2rem)":"1000px",
  }} >
            <ClassDetails/>
            <div style={{position:"relative"}}>
              <div style={{position:'absolute',top:"45px"}} >
              {
                show?<Upcaming/>:null
              }
              </div>
             
                  <div style={{position:"absolute",top:width<630?"-19px":"40px"
                  ,marginLeft:width<970?("5%"):"1%"
                  }}  >
                  <Announc/>
                   <Feed/>
                   <Feed/>
                   <Feed/>   
                  </div>
            </div>
            
                          

  </div>;
};

export default ClassFeed;
