import { useRouter } from "next/router";
import React, { useCallback } from "react";
import Authentication from "./Authentication/Authentication";
import CourseList from "./CourseList/CourseList";
import Header from "./Header/Header";
import HeaderMedium from "./HeaderMedium/HeaderMedium";
export default function Web() {
  const authenticated = false;

  return (
    
    <div>
      {
        authenticated ? 
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
