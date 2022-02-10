import Image from 'next/image';
import React from 'react';
import styles from "../css/Course/FeedBottom.module.css"
import {BiSend} from "react-icons/bi"
const FeedBottom = () => {
  return <div className={styles.feedbottom}>
            <div className={styles.feedbottom__line}/>
            <div className={styles.feedbottom__comment}>
            <Image
      src={"/../public/avt6.jpg"}
      alt="Google"
      width={32}
      height={32}
      objectFit='cover'
      className='feedbottom__comment__avatar'
      />
      <div className={styles.feedbottom__comment__section}>
      <input placeholder='Add class comment...' className={styles.feedbottom__comment__input}/>
        <BiSend className={styles.feedbottom__comment__icon} size={24}/>
      </div>
            </div>
  </div>;
};

export default FeedBottom;
