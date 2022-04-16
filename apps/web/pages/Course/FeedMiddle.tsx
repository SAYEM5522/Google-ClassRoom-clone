import React from 'react';
import styles from "../css/Course/FeedMiddle.module.css"
interface FeedMiddleProps {
  announcement: string;
}
const FeedMiddle = ({announcement}:FeedMiddleProps) => {
  return <div className={styles.feedmiddle}>
          <p className={styles.feedmiddle__text}>{announcement}</p>
  </div>;
};

export default FeedMiddle;
