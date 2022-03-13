import { motion } from 'framer-motion';
import React from 'react';
import styles from "../css/Course/Announce.module.css"
import {useWindowSize} from "../useWindowSizw";
const Announc = () => {
  const {width, height} = useWindowSize();

  return <div className={styles.announce} style={{marginLeft:(width<900)?"-5%":"21.8%",width:(width<900)?"105%":"78.5%"}}  >
  </div>;
};

export default Announc;
