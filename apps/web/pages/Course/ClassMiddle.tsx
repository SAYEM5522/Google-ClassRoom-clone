import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styles from "../css/Course/ClassMiddle.module.css"
interface ClassMiddleProps{
  list: {
    id: number;
    name: string;
}
}
const ClassMiddle = ({list}:ClassMiddleProps) => {
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
  },[])
  return <div className={styles.classmiddle}>
    <p className={styles.classmiddle__name} onClick={onclick}>{list.name}</p>
  </div>;
};

export default ClassMiddle;
