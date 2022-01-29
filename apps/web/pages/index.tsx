import { useRouter } from "next/router";
import { Button } from "ui";
import React, { useCallback } from "react";
import Item from "./Item";

export default function Web() {
  const router=useRouter(); 
  const onClick:React.MouseEventHandler<HTMLHeadingElement>=useCallback((e)=>{
    
      router.push("/Item?id=foo")
  },[])
  return (
    <div>
      <div  onClick={onClick}>
      <Button  />
      </div>
     
    </div>
  );
}
