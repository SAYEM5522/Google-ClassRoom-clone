import React from 'react';
import { IconType } from 'react-icons';
import styles from "../css/HeaderMedium/HeaderMediumItem.module.css";
interface Props {
  name: string;
  Icon: IconType;
  color: string;
}
const HeaderMediumItem = ({name,Icon,color}:Props) => {
  return <div>
    <div className={styles.headerMediumItem}>
      <Icon className={styles.icon} size={18} color={color}/>
      <h4 className={styles.name} style={{color:color}}>{name}</h4>
     
    </div>
  </div>;
};

export default HeaderMediumItem;
