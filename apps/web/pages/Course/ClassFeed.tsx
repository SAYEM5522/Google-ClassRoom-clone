import React from 'react';
import styles from "../css/Course/ClassFeed.module.css"
import Announc from './Announc';
import ClassDetails from './ClassDetails';
import Feed from './Feed';
import Upcaming from './Upcaming';
import {useWindowSize} from "../useWindowSizw";
import { motion } from 'framer-motion';

const ClassFeed = () => {
  const {width, height} = useWindowSize();

  
  return <motion.div className={styles.classfeed} animate={{ 
    marginLeft:(width<1045)?"2rem":"auto", 
    marginRight:(width<1045)?"2rem":"auto",
    width:(width<1045)?"calc(100% - 3.2rem)":"1000px",
  }}>
            <ClassDetails/>
            <div className={styles.classfeed__middle}>
              <Upcaming/>
              <Announc/>
             
            </div>
                   <Feed/>
                   <Feed/>
                   <Feed/>           

  </motion.div>;
};

export default ClassFeed;
