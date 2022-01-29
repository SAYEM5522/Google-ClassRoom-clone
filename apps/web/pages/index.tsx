import { useRouter } from "next/router";
import { Button } from "ui";
import React, { useCallback } from "react";
import Item from "./Item";
import Image from "next/image";

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
      <Image
      src="/../public/img.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
      priority={true}
      objectFit="cover"
      objectPosition="center"

    />
    </div>
  );
}
