import { useState,useEffect } from "react";
import * as React from "react";
interface Size {
  width: number;
  height: number;
}
export const useWindowSize=()=> {
const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(()=>{
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
  
 
}