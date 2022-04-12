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
  const user=useSelector(selectEmail);

  // const [user, setUser] = React.useState<Uprops>(null);
  const getId=useSelector(selectGoogleID)
  // const getdata=()=>{
  //   axios.get('http://localhost:5000/signin?id=116689928635388390309')
  //   .then(res=>{
  //   dispatch(setUser({
  //     Email:res.data[0].email,
  //     Name:res.data[0].name,
  //   }))
  //   })
  // }

  // useEffect(()=>{
  //    getdata(),
  //    ()=>getdata()
  // },[])
  console.log(user)
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
