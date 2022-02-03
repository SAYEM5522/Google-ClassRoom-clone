import React from 'react';
import { IconType } from 'react-icons';
import styles from "../css/HeaderMedium/HeaderMediumItem.module.css";
interface Props {
  name: string;
  Icon: IconType;
}
const HeaderMediumItem = ({name,Icon}:Props) => {
  return <div>
    <div className={styles.headerMediumItem}>
      <Icon className={styles.icon} size={18}/>
      <h4 className={styles.name}>{name}</h4>
     
    </div>
  </div>;
};

export default HeaderMediumItem;
