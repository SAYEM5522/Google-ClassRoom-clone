import React from 'react';
import styles from "../css/Course/FeedMiddle.module.css"
const FeedMiddle = () => {
  return <div className={styles.feedmiddle}>
          <p className={styles.feedmiddle__text}>The Final exam comprises the following two modules:
 Module 1: A question comprising 10  MCQs prepared in a Google Form with total marks ten (10) and total time
15 minutes. Immediately after submitting module1, you are supposed to start module 2. 
 Module 2: This module weighs 20 marks with a total time of 60 minutes (+10 minutes for uploading answer scripts in Google Classroom). You have to answer 4 out of 5 questions. A question may have several parts like (a), (b), (c).</p>
  </div>;
};

export default FeedMiddle;
