import React from 'react';
import styles from "../css/Course/Upcomming.module.css"
const Upcaming = () => {
  return <div className={styles.upcoming}>
        <p className={styles.upcoming__top}>Upcoming</p>
        <p className={styles.upcoming__middle}>Woohoo, no work due soon!</p>
        <p className={styles.upcoming__list}>View all</p>
  </div>;
};

export default Upcaming;
