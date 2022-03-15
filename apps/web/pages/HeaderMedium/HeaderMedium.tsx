import React from 'react';
import styles from "../css/HeaderMedium/HeaderMedium.module.css";
import HeaderMediumItem from './HeaderMediumItem';
import {BsCardChecklist} from "react-icons/bs";
import {BiCalendarAlt} from "react-icons/bi";
const HeaderMedium = () => {
  return <div className={styles.headerMedium}>
       <HeaderMediumItem name={"To-do"} Icon={BsCardChecklist} color="#1a73e8"/>
       <HeaderMediumItem name={"Calendar"} Icon={BiCalendarAlt} color="#1a73e8"/>

  </div>;
};

export default HeaderMedium;
