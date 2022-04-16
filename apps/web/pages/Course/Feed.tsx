import { motion } from 'framer-motion';
import React from 'react';
import styles from "../css/Course/Feed.module.css"
import FeedBottom from './FeedBottom';
import FeedMiddle from './FeedMiddle';
import FeedTop from './FeedTop';
import {useWindowSize} from "../useWindowSizw";
interface FeedProps {
        item: {
                announcement: string;
                name: string;
                times: string;
                imgUrl: string;
        }
}
const Feed = ({item}:FeedProps) => {
  const {width, height} = useWindowSize();

  return <div className={styles.feed} style={{marginLeft:(width<900)?"-5%":"21.8%",width:(width<900)?"105%":"78.5%"}} >
    <div className={styles.feed__top}>
            <FeedTop name={item.name} imgUrl={item.imgUrl} times={item.times} />
    </div>
        <div className={styles.feed__middle}>
            <FeedMiddle announcement={item.announcement}/>
    </div>
    <div className={styles.feed__bottom}>
            <FeedBottom/>
    </div>
  </div>;
};

export default Feed;
