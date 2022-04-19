import React from 'react';
import { useEffect } from 'react';
import CourseHeader from '../Course/CourseHeader';
import ClassWorkFeed from './ClassWorkFeed';
import ClassWorkHeader from './ClassWorkHeader';
import axios from 'axios';
import { useState } from 'react';
const ClassWork = () => {
  const [data,setData]=useState([])
  const getdata=async()=>{
    await axios.get("http://localhost:5000/Assignment").then(res=>{
          setData(res.data)
    }).catch(err=>{
      console.log(err)
    })
    
  }
  
useEffect(()=>{
  getdata(),
  ()=>getdata()
},[])




  return <div>

      <CourseHeader/>
      <div style={{width:"55%",height:"48px",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
      <ClassWorkHeader/>
      </div>
      <div style={{width:"53%",height:"100%",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
        {
          data.map((item,index)=>{
            return(
              <ClassWorkFeed key={index} item={item}/>
            )
          })
        }

      </div>
  </div>;
};

export default ClassWork;
