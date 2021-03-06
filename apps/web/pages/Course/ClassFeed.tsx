import React, { useEffect, useState } from 'react';
import styles from "../css/Course/ClassFeed.module.css"
import Announc from './Announc';
import ClassDetails from './ClassDetails';
import Feed from './Feed';
import Upcaming from './Upcaming';
import {useWindowSize} from "../useWindowSizw";
import { motion } from 'framer-motion';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateId, setAnnouncementId } from '../features/ClassRoomList';

const ClassFeed = () => {
  const {width, height} = useWindowSize();
  const [show,setShow]=useState(true);
  const [data,setData]=useState([]);
  const dispatch=useDispatch();
  const id=useSelector(selectUpdateId)
  const getData=async()=>{
    const res=await axios.get(`http://localhost:5000/Annoncement?id=${id}`);
    setData(res.data);
  }
  useEffect(()=>{
    (width<900)?setShow(false):setShow(true);
    getData(),
    ()=>getData()
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
                  {
                       data.map((item,index)=>{
                          return(
                            <Feed key={index} item={item}/>
                          )
                       })
                  }
                  </div>
            </div>
            
                          

  </div>;
};

export default ClassFeed;
