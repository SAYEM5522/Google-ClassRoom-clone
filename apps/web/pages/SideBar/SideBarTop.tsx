import React, { useCallback } from 'react';
import { IconType } from 'react-icons/lib';
import styles from "../css/SideBar/SideBarTop.module.css";
interface Props {
  name: string;
  Icon: IconType;
  setOpen?: (open: boolean) => void;
  current?: boolean;
}
const SideBarTop = ({name,Icon,setOpen,current}:Props) => {
  const onClick=useCallback(()=>{
   (setOpen)?setOpen(false):null;
},[])
  return <div className={`${current?styles.sidebartop__current:styles.sidebartop}`} onClick={onClick}>
          <Icon size={21.5}/>
          <h2 className={styles.sidebar__name}>{name}</h2>
  </div>;
};

export default SideBarTop;
