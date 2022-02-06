import React from 'react';
import styles from "../css/Course/Feed.module.css"
import FeedBottom from './FeedBottom';
import FeedMiddle from './FeedMiddle';
import FeedTop from './FeedTop';
const Feed = () => {
  return <div className={styles.feed}>
    <div className={styles.feed__top}>
            <FeedTop/>
    </div>
        <div className={styles.feed__middle}>
            <FeedMiddle/>
    </div>
    <div className={styles.feed__bottom}>
            <FeedBottom/>
    </div>
  </div>;
};

export default Feed;
