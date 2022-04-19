import { useRouter } from "next/router";
import React, { useCallback } from "react";
import Authentication from "./Authentication/Authentication";
import CourseList from "./CourseList/CourseList";
import Header from "./Header/Header";
import HeaderMedium from "./HeaderMedium/HeaderMedium";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectGoogleID, setClassRoomList, setUser } from "./features/ClassRoomList";
interface Uprops{
  email:string,
}
export default function Web() {

  const dispatch = useDispatch();
  const getId=useSelector(selectGoogleID)
  console.log(getId)
  const getdata=()=>{
    axios.get(`http://localhost:5000/signin`)
    .then(res=>{
    dispatch(setUser({
      Email:res.data[0]?.email,
      Name:res.data[0]?.name,
      ImageUrl:res.data[0]?.imageUrl,
    }))
    }).catch(err=>{
      console.log(err)
  })
  }
  useEffect(()=>{
     getdata(),
     ()=>getdata()
  },[])
  const user=useSelector(selectEmail);

  return (
    
    <div>
      {
        user ? 
        <div>
        <Header/>
       <HeaderMedium/>
       <CourseList/>
        </div>
         : 
         <Authentication/>
      }
    
    
    </div>
   
  );
}
