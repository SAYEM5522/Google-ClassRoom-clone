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

  const getId=useSelector(selectGoogleID)
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
