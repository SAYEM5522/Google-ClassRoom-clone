import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import styles from "../css/Course/ClassMiddle.module.css"
import {useWindowSize} from "../useWindowSizw";
interface ClassMiddleProps{
  list: {
    id: number;
    name: string;
},
index?: number;
}
const ClassMiddle = ({list,index}:ClassMiddleProps) => {
  const {width, height} = useWindowSize();
  const [currentIndex,setcurrentIndex]=useState(0);
  const router=useRouter();
  const onclick=useCallback(()=>{
        if(list.id===1){
            router.push("../Course/Class")
        }
        else if(list.id===2){
          router.push("../ClassWork/ClassWork")
        }
        else if(list.id===3){
          router.push("../People/People")
        }
        else{
          router.push("../Grade/Grade")
        } 
  },[currentIndex,list.id,router])
  return <div className={styles.classmiddle} 
  >     
    <p className={styles.classmiddle__name} style={{borderBottom:`${(currentIndex===list.id)?"2px solid red":null}`}} onClick={onclick}>{list.name}</p>
  </div>;
};

export default ClassMiddle;
